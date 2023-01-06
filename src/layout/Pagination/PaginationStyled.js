import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    font: bold 1rem "Poppins", serif;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.313rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
    color: #eee;
    border-color: #eee;
  }
  button.active {
    font-weight: 900;
    border-color: #fff;
    color: #fff;
    background-color: #33a4f5;
  }
`;
