import styled from "styled-components";

export const Select = styled.select`
  padding: 1rem;
  border: none;
  border-radius: 15px;
  option {
    border: none;
  }
`;
export const Botao = styled.button`
  height: 3rem;
  width: 8rem;

  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 6rem;
  margin-left:2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #3867d6;
  color: #fff;
  font-size: 1rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;