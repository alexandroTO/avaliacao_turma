import {useState} from 'react'
import * as S from "../components/Home/styled";
const Home = () => {
    const [materia, setMateria] = useState('')

    const iniciar = () =>{
        if(materia === 'linguagem1'){
            window.location.href = '/linguagem-tn1';
        }else if(materia === 'linguagem2'){
            window.location.href = '/linguagem-tn2';
        }else if(materia === 'projetosweb'){
            window.location.href = '/projeto-web';
        }
        else if(materia === 'programacaoweb'){
            window.location.href = '/programacao-web';
        }
    }
  return (

      <S.Card>
        <h3>Selecione a matéria que deseja responder o questionario?</h3>
        <S.Select onChange={(e)=> setMateria(e.target.value)}>
        <option value="">Selecione</option>
            <option value="linguagem1">linguagem de programação TN01</option>
            <option value="linguagem2">linguagem de programação TN02</option>
            <option value="projetosweb">Projetos em Programação WEB</option>
            <option value="programacaoweb">Programação WEB</option>
        </S.Select>
        <S.Botao onClick={iniciar}>Iniciar</S.Botao>
      </S.Card>

  );
};
export default Home;
