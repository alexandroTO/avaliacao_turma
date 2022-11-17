import { useState } from "react";
import ChartQuest from "../components/ChartQuest";

const Relatorios = () => {
  const [turma, setTurma] = useState("");
  return (
    <div style={{ padding: "2rem" }}>
      <select
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
      </select>
      {turma !== "" && (
        <>
          <ChartQuest turma={turma} quest="quest1" titulo="Na Sua opinião o Conteúdo programado para a matéria foi atendido?" />
          <ChartQuest turma={turma} quest="quest2" titulo="Na sua opinião a explicações do conteúdo teórico foram claras e objetivas?" />
          <ChartQuest turma={turma} quest="quest3" titulo="Na sua opinião as explicações durante as atividades foram claras e objetivas?" />
          <ChartQuest turma={turma} quest="quest4" titulo="Na sua opinião a maneira que os exercícios foram propostos ajudaram na compreensão do conteúdo?" />
          <ChartQuest turma={turma} quest="quest5" titulo="Qual sua opinião geral sobre a matéria cursada em questão?" />
        </>
      )}
    </div>
  );
};
export default Relatorios;
