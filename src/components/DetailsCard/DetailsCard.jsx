import pokebola from "../../assets/pokebola.png";
import {
  BaseStatsColumn,
  BaseStatsContainer,
  BaseStatsRow,
  CardsContainer,
  DetailsContainer,
  ImagesContainer,
  Moves,
  MovesContainer,
  MovesItems,
  Pokeball,
  Pokemon,
  PokemonType,
  StatsName,
  StatsName2,
  StatsName3,
  TypesContainer,
} from "./DetailsCardStyled";

import React from "react";
import { getColors } from "../../utils/ReturnCardColors";
import { getTypes } from "../../utils/ReturnPokemonType";
import { Progress } from "@chakra-ui/react";

function DetailsCard(props) {
  const { details } = props;
  return (
    <CardsContainer cardColor={getColors(details.types?.[0].type.name)}>
      <ImagesContainer>
        <img src={details.sprites?.front_default} alt={details.name} />
        <img src={details.sprites?.back_default} alt={details.name} />
      </ImagesContainer>
      <BaseStatsContainer>
        <h1>Base stats</h1>
        <BaseStatsColumn>
          {details.stats?.map((status) => (
            <BaseStatsRow key={status.stat.name}>
              <StatsName>
                {status.stat.name
                  .replace("hp", "HP")
                  .replace("special-attack", "Sp. Atk")
                  .replace("special-defense", "Sp. Def ")}
              </StatsName>
              <StatsName2>{status.base_stat}</StatsName2>
              <div>
                {status.base_stat <= 50 ? (
                  <Progress
                    key={status.base_stat}
                    value={status.base_stat}
                    width="200px"
                    colorScheme="yellow"
                    borderRadius={4}
                    bg="transparent"
                  />
                ) : (
                  <Progress
                    key={status.base_stat}
                    value={status.base_stat}
                    width="200px"
                    colorScheme="red"
                    borderRadius={4}
                    bg="transparent"
                  />
                )}
              </div>
            </BaseStatsRow>
          ))}
          <BaseStatsRow>
            <StatsName2>Total </StatsName2>
            <StatsName3>
              {details.stats?.reduce((acc, cur) => acc + cur.base_stat, 0)}
            </StatsName3>
          </BaseStatsRow>
        </BaseStatsColumn>
      </BaseStatsContainer>
      <DetailsContainer>
        <p>#{details.id < 10 ? "0" + details.id : details.id}</p>
        <h1>{details.name}</h1>
        <TypesContainer>
          {details?.types?.map((type) => {
            return (
              <PokemonType
                key={type.type.name}
                src={getTypes(type.type.name)}
                alt=""
              />
            );
          })}
        </TypesContainer>
        <MovesContainer>
          <h2>Moves:</h2>
          <MovesItems>
            {details?.moves &&
              details?.moves
                .filter((move, i) => i < 4)
                .map((move) => {
                  return (
                    <Moves key={move.move.name}>
                      {move.move.name.replace("-", " ")}
                    </Moves>
                  );
                })}
          </MovesItems>
        </MovesContainer>
      </DetailsContainer>
      <Pokemon
        src={details.sprites?.other["official-artwork"].front_default}
        alt={details.name}
      />
      <Pokeball src={pokebola} alt="pokeball" />
    </CardsContainer>
  );
}

export default DetailsCard;
