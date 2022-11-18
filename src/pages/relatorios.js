import { useState } from "react";
import ChartQuest from "../components/ChartQuest";
import * as S from '../components/Relatorios/styled'
const Relatorios = () => {
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
      {turma !== "" && (
        <>
          <ChartQuest turma={turma} quest="quest1" titulo="Na Sua opinião o Conteúdo programado para a matéria foi atendido?" color="#20bf6b" />
          <ChartQuest turma={turma} quest="quest2" titulo="Na sua opinião a explicações do conteúdo teórico foram claras e objetivas?" color="#0fb9b1"/>
          <ChartQuest turma={turma} quest="quest3" titulo="Na sua opinião as explicações durante as atividades foram claras e objetivas?" color="#f7b731"/>
          <ChartQuest turma={turma} quest="quest4" titulo="Na sua opinião a maneira que os exercícios foram propostos ajudaram na compreensão do conteúdo?" color="#fa8231"/>
          <ChartQuest turma={turma} quest="quest5" titulo="Qual sua opinião geral sobre a matéria cursada em questão?" color="#45aaf2"/>
        </>
      )}
    </div>
  );
};
export default Relatorios;
