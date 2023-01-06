import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import pokeball from "../../assets/pngwing 2.png";
import { GlobalContext } from "../../context/GlobalContext";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnCardColors";
import {
  CatchButton,
  Container,
  DeleteButton,
  DetailsButton,
  Pokeball,
  Pokemon,
  PokemonName,
  PokemonNumber,
  PokemonType,
  TypesContainer,
} from "./CardStyled";
import { ScaleFade, VisuallyHidden } from "@chakra-ui/react";

function Card(props) {
  const { pokemonUrl } = props;

  const context = useContext(GlobalContext);
  const { addToPokedex, removeFromPokedex, setModalVisible } = context;
  const [isLoading, setLoading] = useState(true);

  const location = useLocation();

  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});
  const buttonModalFunction1 = () => {
    setModalVisible(true);
    addToPokedex(pokemon);
  };

  const buttonModalFunction2 = () => {
    setModalVisible(true);
    removeFromPokedex(pokemon);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <>
      {isLoading === false ? (
        <ScaleFade initialScale={0.9} in={true}>
          <Container cardColor={getColors(pokemon.types?.[0].type.name)}>
            <div>
              <ScaleFade initialScale={1.5} in={true}>
                <PokemonNumber>
                  #{pokemon.id < 10 ? "0" + pokemon.id : pokemon.id}
                </PokemonNumber>
                <PokemonName>{pokemon.name}</PokemonName>
              </ScaleFade>
              <TypesContainer>
                {pokemon?.types?.map((type) => {
                  return (
                    <PokemonType
                      key={type.type.name}
                      src={getTypes(type.type.name)}
                      alt=""
                    />
                  );
                })}
              </TypesContainer>
            </div>
            <Pokeball src={pokeball} alt="pokeball" />
            {location.pathname === "/" ? (
              <CatchButton onClick={() => buttonModalFunction1()}>
                Capturar!
              </CatchButton>
            ) : (
              <DeleteButton onClick={() => buttonModalFunction2()}>
                Excluir
              </DeleteButton>
            )}
            <DetailsButton
              onClick={() => goToDetailsPage(navigate, pokemon.name)}
            >
              Detalhes
            </DetailsButton>
            <div>
              <Pokemon
                src={pokemon.sprites?.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
            </div>
          </Container>
        </ScaleFade>
      ) : (
        <VisuallyHidden />
      )}
    </>
  );
}

export default Card;
