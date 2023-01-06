import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { GlobalContext } from "../../context/GlobalContext";
import { useLocation } from "react-router-dom";

const ModalButton = () => {
  const context = useContext(GlobalContext);
  const { pokedex, details, modalVisible, setModalVisible } = context;
  const inPokedex = pokedex.find((pokemon) => pokemon.name === details.name);
  const location = useLocation();

  const switchModal = () => {
    switch (location.pathname) {
      case `/`:
        return (
          <>
            <ModalCloseButton onClose={() => setModalVisible(false)} />
            <ModalHeader fontSize="3rem" marginTop="2rem">
              <p>Gotcha!</p>
            </ModalHeader>
            <ModalBody>
              <p>O Pokémon foi adicionado a sua Pokédex</p>
            </ModalBody>
          </>
        );
      case `/pokedex`:
        return (
          <>
            <ModalCloseButton onClose={() => setModalVisible(false)} />
            <ModalHeader fontSize="3rem" marginTop="2rem">
              <p>Oh, no!</p>
            </ModalHeader>
            <ModalBody>
              <p>O Pokémon foi removido da sua Pokedéx</p>
            </ModalBody>
          </>
        );
      case `/pokemon/${details.name}`:
        return (
          <>
            <ModalCloseButton onClose={() => setModalVisible(false)} />
            <ModalHeader fontSize="3rem" marginTop="2rem">
              {!inPokedex ? <p>Oh, no!</p> : <p>Gotcha!</p>}
            </ModalHeader>
            <ModalBody>
              {!inPokedex ? (
                <p>O Pokémon foi removido da sua Pokedéx</p>
              ) : (
                <p>O Pokémon foi adicionado a sua Pokédex</p>
              )}
            </ModalBody>
          </>
        );
      default:
    }
  };
  return (
    <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
      <ModalContent
        height="13.875rem"
        width="28.1875rem"
        display="inline-block"
        fontFamily="Poppins"
        fontWeight="bold"
        textAlign="center"
      >
        {switchModal()}
      </ModalContent>
    </Modal>
  );
};

export default ModalButton;
