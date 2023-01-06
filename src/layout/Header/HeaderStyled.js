import styled from "styled-components";

export const DeleteButton = styled.div`
  display: grid;
  grid-column-start: 3;
  align-items: center;
  justify-items: end;
  button {
    width: 17.938rem;
    height: 4.625rem;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.25rem, 0.625rem;
    background-color: #ff6262;
    font: normal 1rem "Poppins", serif;
    margin-right: 2.563rem;
    cursor: pointer;
  }
`;

export const ContainerGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #fff;
  width: 90rem;
  height: 10rem;
  margin: 0 auto;
`;

export const LogoPokemonItem = styled.div`
  display: grid;
  grid-column-start: 2;
  align-items: center;
  justify-items: center;
`;

export const ButtonItem = styled.div`
  display: grid;
  grid-column-start: 3;
  align-items: center;
  justify-items: end;
  button {
    width: 17.938rem;
    height: 4.625rem;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.25rem, 0.625rem;
    background-color: #33a4f5;
    font: bold 1.5rem "Poppins", serif;
    margin-right: 2.563rem;
    cursor: pointer;
  }
`;

export const ButtonAllPokemons = styled.div`
  display: grid;
  grid-column-start: 1;
  align-items: center;
  justify-items: start;
  margin-left: 6.25rem;
  img {
    margin-right: 0.625rem;
    display: inline-block;
  }
  button {
    border: none;
    background-color: #fff;
    text-decoration: underline;
    font: bold 1.5rem "Poppins", serif;
    cursor: pointer;
  }
`;

export const AddButton = styled.div`
  display: grid;
  grid-column-start: 3;
  align-items: center;
  justify-items: end;
  button {
    width: 17.938rem;
    height: 4.625rem;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.25rem, 0.625rem;
    background-color: #70b873;
    font: normal 1rem "Poppins", serif;
    margin-right: 2.563rem;
    cursor: pointer;
  }
`;
