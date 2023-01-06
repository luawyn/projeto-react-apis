import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { PaginationContainer } from "./PaginationStyled";

const Pagination = () => {
  const context = useContext(GlobalContext);
  const { totalPokemons, pokemonsPerPage, setCurrentPage, currentPage } =
    context;

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pages.push(i);
  }

  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <PaginationContainer>
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentPage(page)}
                className={page === currentPage ? "active" : ""}
              >
                {page}
              </button>
            );
          })}
        </PaginationContainer>
      ) : (
        ""
      )}
    </>
  );
};

export default Pagination;
