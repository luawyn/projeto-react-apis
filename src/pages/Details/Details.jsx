import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import { Container, Title } from "./DetailsStyled";
import { GlobalContext } from "../../context/GlobalContext";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import { Box, Spinner } from "@chakra-ui/react";

function Details() {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(GlobalContext);
  const { details, setDetails } = context;

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}${params.pokemonId}`);
      setDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Container>
        <Title>Detalhes</Title>
        {isLoading === false ? (
          <DetailsCard key={details.id} details={details} />
        ) : (
          <Box display="flex" justifyContent="center">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        )}
      </Container>
    </div>
  );
}

export default Details;
