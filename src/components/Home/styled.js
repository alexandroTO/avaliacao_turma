import styled from "styled-components";

export const Card = styled.div`
    display:flex;    
    flex-direction:column;
    gap: 2rem;

    width: 70%;
    margin: 0 auto;
    background: #f7f7f7;
    border-radius: 15px;
    height:25rem;
    justify-content: center;
    align-items: center;
    margin-top:15%;
    box-shadow: 0 3px 10px;
    `
    export const Select = styled.select`
    width: 31rem;
    height: 3rem;
    text-align: center;
    border: none;
    background-color: #f7f7f7;
    border-bottom: 1px solid grey;
    `

    export const Botao = styled.button`
    background-color: #2e6166;
    border: none;
    height: 3rem;
    width: 7rem;
    border-radius: 1rem;
    color: #fff;
    `