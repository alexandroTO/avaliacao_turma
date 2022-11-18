import { useState } from "react";
import Mensagem from "../components/Mensagens";
import * as S from '../components/Relatorios/styled'
const Mensagens = () => {
  const [turma, setTurma] = useState("");
  return (
    <div style={{ padding: "2rem" }}>
      <S.Select
        onChange={(e) => {
          setTurma(e.target.value);
        }}
      >
        <option value="">Selecione sua turma desejada</option>
        <option value="EGS19206 - Linguagem de Programação T01N">
          EGS19206 - Linguagem de Programação T01N
        </option>
        <option value="EGS19206 - Linguagem de Programação T02N">
          EGS19206 - Linguagem de Programação T02N
        </option>
        <option value="EGS19602 - Programação Web">
          EGS19602 - Programação Web
        </option>
        <option value="EGS19605 - Projeto de Programação Web">
          EGS19605 - Projeto de Programação Web
        </option>
      </S.Select>
      <S.Botao onClick={()=>{
        window.location.href='/admin/relatorios'
      }}>Respostas</S.Botao>
      {turma !== "" && (
        <>
          <Mensagem turma={turma} />
          
        </>
      )}
    </div>
  );
};
export default Mensagens;
