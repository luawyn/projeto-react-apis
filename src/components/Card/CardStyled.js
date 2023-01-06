import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  min-width: 25rem;
  max-width: 27.5rem;
  background-color: ${(props) => props.cardColor};
  border-radius: 0.75rem;
  display: flex;
  position: relative;
  margin: 1.875rem;
  color: #ffffff;
  font-family: "Poppins";
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0.625rem;
  ::first-letter {
    text-transform: uppercase;
  }
`;

export const PokemonType = styled.img`
  max-width: 6.25rem;
  height: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 0.5rem;
  display: inline-block;
`;

export const TypesContainer = styled.div`
  margin-bottom: 3.25rem;
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.625rem;
  width: 9.125rem;
  height: 2.375rem;
  background: #ffffff;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0.625rem;
  right: 1.375rem;
  z-index: 2;
  color: #000;
`;

export const Pokemon = styled.img`
  width: 12.0625rem;
  height: 12.0625rem;
  position: absolute;
  top: -2.75rem;
  right: 0;
  z-index: 2;
`;
export const DeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.625rem;
  width: 9.125rem;
  height: 2.375rem;
  background: #ff6262;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0.625rem;
  right: 1.375rem;
  z-index: 2;
  color: #fff;
  font: normal 1rem "Poppins";
`;

export const DetailsButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.625rem;
  width: 9.125rem;
  height: 2.375rem;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  position: absolute;
  bottom: 0.625rem;
  left: -0.625rem;
  z-index: 2;
  color: #fff;
  font: bold 1rem "Poppins";
  background: none;
`;
