import Card from "../../components/Card/Card";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { CardsContainer, Container, Title } from "./PokedexPageStyled";

function PokedexPage() {
  const context = useContext(GlobalContext);

  const { pokedex } = context;

  return (
    <Container>
      <Title>Meus Pokémons</Title>
      <CardsContainer>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default PokedexPage;
