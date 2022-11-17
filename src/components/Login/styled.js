import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  width: 30%;
  height: auto;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  gap: 2rem;

  input {
    width: 80%;
    height: 2rem;
    border-radius: 15px;
    border: none;
    box-shadow: 0 1px 2px grey;
    padding-left: 1rem;
  }

`;
export const Botao = styled.button`
  background-color: #2e6166;
  border: none;
  height: 2.5rem;
  width: 7rem;
  border-radius: 1rem;
  color: #fff;
  margin-bottom:3rem;
`;
