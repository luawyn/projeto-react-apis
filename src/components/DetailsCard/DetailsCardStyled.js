import styled from "styled-components";

export const CardsContainer = styled.div`
  padding: 1.4375rem;
  height: 41.25rem;
  width: 84.375rem;
  background-color: ${(props) => props.cardColor};
  border-radius: 0.75rem;
  position: relative;
  margin: 0 auto;
  color: #ffffff;
  display: flex;
`;

export const Pokemon = styled.img`
  width: 16.875rem;
  height: 16.875rem;
  position: absolute;
  top: -6.25rem;
  right: 0;
  z-index: 2;
`;

export const Pokeball = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  z-index: 0;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.625rem;
  gap: 2.938rem;
  img {
    width: 16.25rem;
    border-radius: 0.5rem;
    background-color: #fff;
  }
`;

export const BaseStatsContainer = styled.div`
  display: absolute;
  z-index: 1;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 25rem;
  height: 35.313rem;
  padding: 1.875rem;
  margin-top: 1.625rem;
  color: black;
  h1 {
    font: bold 2rem "Poppins";
    margin-bottom: 1.25rem;
  }
`;

export const BaseStatsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BaseStatsRow = styled.div`
  display: flex;
  gap: 1.875rem;
  align-items: center;
  border-top: 1px solid lightgray;
`;

export const StatsName = styled.div`
  ::first-letter {
    text-transform: uppercase;
  }
  text-align: start;
  width: 12.5rem;
`;
export const StatsName2 = styled.div``;

export const StatsName3 = styled.div`
  margin-left: 1.25rem;
  font-weight: bold;
`;

export const DetailsContainer = styled.div`
  margin-left: 4.25rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: "Poppins";
  margin-top: 1.625rem;
  p {
    font-size: 1rem;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
    ::first-letter {
      text-transform: uppercase;
    }
  }
  h2 {
    font: bold 1.5rem "Poppins";
    color: black;
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
  margin-bottom: 2.875rem;
`;

export const MovesContainer = styled.div`
  display: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1.125rem;
  border-radius: 0.5rem;
  margin-top: 2.875rem;
  height: 21.25rem;
  width: 18.25rem;
  background-color: #fff;
`;
export const MovesItems = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Moves = styled.p`
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: 0.75rem;
  background-color: #ececec;
  margin-bottom: 1.25rem;
  padding: 0.625rem;
  color: black;
  ::first-letter {
    text-transform: uppercase;
  }
`;
