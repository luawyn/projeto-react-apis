import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import logo from "../../assets/pokemon.png";
import vector from "../../assets/Vector.png";
import {
  DeleteButton,
  LogoPokemonItem,
  ButtonAllPokemons,
  ContainerGrid,
  ButtonItem,
  AddButton,
} from "./HeaderStyled";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import ModalButton from "../../components/Modal/ModalButton";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(GlobalContext);

  const { pokedex, details, addToPokedex, removeFromPokedex, setModalVisible } =
    context;

  const buttonModalFunction1 = () => {
    setModalVisible(true);
    addToPokedex(details);
  };

  const buttonModalFunction2 = () => {
    setModalVisible(true);
    removeFromPokedex(details);
  };
  const inPokedex = pokedex.find((pokemon) => pokemon.name === details.name);

  function buttonDetails() {
    if (!inPokedex) {
      return (
        <>
          <AddButton>
            <button onClick={() => buttonModalFunction1()}>
              Adicionar na Pokédex
            </button>
          </AddButton>
        </>
      );
    } else {
      return (
        <>
          <DeleteButton>
            <button onClick={() => buttonModalFunction2()}>
              Excluir da Pokédex
            </button>
          </DeleteButton>
        </>
      );
    }
  }

  const switchHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <LogoPokemonItem>
              <img src={logo} alt="logo pokemon" />
            </LogoPokemonItem>
            <ButtonItem>
              <button onClick={() => goToPokedexPage(navigate)}>Pokedéx</button>
            </ButtonItem>
          </>
        );
      case "/pokedex":
        return (
          <>
            <ButtonAllPokemons>
              <button onClick={() => goToHomePage(navigate)}>
                <img src={vector} alt="vector" />
                Todos Pokémons
              </button>
            </ButtonAllPokemons>
            <LogoPokemonItem>
              <img src={logo} alt="logo pokemon" />
            </LogoPokemonItem>
          </>
        );
      case `/pokemon/${details.name}`:
        return (
          <>
            <ButtonAllPokemons>
              <button onClick={() => goToHomePage(navigate)}>
                <img src={vector} alt="vector" />
                Todos Pokémons
              </button>
            </ButtonAllPokemons>
            <LogoPokemonItem>
              <img src={logo} alt="logo pokemon" />
            </LogoPokemonItem>
            {buttonDetails()}
          </>
        );
      default:
        return (
          <>
            <ButtonAllPokemons>
              <button onClick={() => goToHomePage(navigate)}>
                <img src={vector} alt="vector" />
                Todos Pokémons
              </button>
            </ButtonAllPokemons>
            <LogoPokemonItem>
              <img src={logo} alt="logo pokemon" />
            </LogoPokemonItem>
          </>
        );
    }
  };
  return (
    <ContainerGrid>
      {switchHeader()}
      <ModalButton />
    </ContainerGrid>
  );
};

export default Header;
