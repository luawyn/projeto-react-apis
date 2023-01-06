import Card from "../../components/Card/Card";
import { CardsContainer, Container, Title } from "./HomePageStyled";
import { useContext,  } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Box,  Spinner } from "@chakra-ui/react";
import { getColors } from "../../utils/ReturnCardColors";

function HomePage() {
  const context = useContext(GlobalContext);

  const { pokedex, pokelist, isLoading } = context;

  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <>
      <Container>
        <Title>Todos Pokémons</Title>
        {isLoading === true ? (
          <Box display="flex" justifyContent="center">
           
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        ) : (
          <CardsContainer>
            {filteredPokelist().map((pokemon) => (
              <Card
                key={pokemon.url}
                pokemonUrl={pokemon.url}
                cardColor={getColors(pokemon.types?.[0].type.name)}
              />
            ))}
          </CardsContainer>
        )}
      </Container>
    </>
  );
}

export default HomePage;
