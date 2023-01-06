import { useEffect, useState } from "react";
import { Main } from "./AppStyled";
import { GlobalContext } from "./context/GlobalContext";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { ALLPOKEMON_URL } from "./constants/constants";
import axios from "axios";

export default function App() {
  const [pokelist, setPokelist] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(39);
  const [pokedex, setPokedex] = useState([]);
  const [details, setDetails] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${ALLPOKEMON_URL}`);
      setPokelist(response.data.results);
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (pokedex.length > 0) {
      const listPokedex = JSON.stringify(pokedex);
      localStorage.setItem("pokedex", listPokedex);
    }
  }, [pokedex]);

  useEffect(() => {
    const newPokedex = JSON.parse(localStorage.getItem("pokedex"));
    if (newPokedex !== null) {
      setPokedex(newPokedex);
    }
  }, []);

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
    localStorage.clear();
  };

  const lastPokemonIndex = currentPage * pokemonsPerPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
  const currentPokemons = pokelist.slice(firstPokemonIndex, lastPokemonIndex);

  const context = {
    pokedex,
    addToPokedex,
    removeFromPokedex,
    pokelist: currentPokemons,
    totalPokemons: pokelist.length,
    pokemonsPerPage,
    setCurrentPage,
    currentPage,
    isLoading,
    setLoading,
    details,
    setDetails,
    modalVisible,
    setModalVisible,
  };

  return (
    <ChakraProvider>
      <Main>
        <GlobalContext.Provider value={context}>
          <Router />
        </GlobalContext.Provider>
      </Main>
    </ChakraProvider>
  );
}
