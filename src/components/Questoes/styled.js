import styled from "styled-components";

export const Espaco = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 70%;
  margin: 0 auto;
  background: #f7f7f7;
  border-radius: 15px;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
  box-shadow: 0 3px 10px;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  box-sizing: border-box;
  h4 {
    text-align: center;

    padding-bottom: 15px;
    color: #000;
    font-size: 1.3rem;
  }
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 3px grey;
  border-radius: 1rem;
  padding: 20px;
  font-size: 1rem;
  text-align: center;
  datalist {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  option {
    padding-left: 6px;
    font-size: 0.7rem;
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 16px;
    background-image: linear-gradient(
      to right,
      #ff6e1b,
      #eb8f00,
      #c9ad00,
      #96c800,
      #35df00
    );
    opacity: 1;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    border-radius: 20px;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -5px;
    width: 20px;
    height: 20px;
    background: #000;
    cursor: pointer;
    border-radius: 20px;
  }

  .slider::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #000;
    cursor: pointer;
    border-radius: 20px;
  }
`;
export const Botao = styled.button`
  height: 3rem;
  width: 20%;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 6rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #3867d6;
  color: #fff;
  font-size: 1rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
