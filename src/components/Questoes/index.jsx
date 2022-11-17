import { useState } from "react";
import * as S from "./styled";
import axios from 'axios'

const Questoes = (props) => {

  const [quest1, setQuest1] = useState(0);
  const [quest2, setQuest2] = useState(0);
  const [quest3, setQuest3] = useState(0);
  const [quest4, setQuest4] = useState(0);
  const [quest5, setQuest5] = useState(0);
  const [quest6, setQuest6] = useState('');


  
  const Envio = async () => {
    
    const json = axios.post(
      "https://www4.fag.edu.br/api_avaliacao/fag.php",
      JSON.stringify({
        turma:props.nome,
        quest1: quest1,
        quest2: quest2,
        quest3: quest3,
        quest4: quest4,
        quest5: quest5,
        quest6: quest6,
        PG: "questionario",
      })
    );

    const { status } = (await json).data;
    
    if (status !== 0) {
     alert('Obrigado por sua opinião!');
     window.location.href = '/';
    }

   }
  



  return (
    <S.Espaco style={{marginTop:'4rem'}}>

      <S.Card>
        <h4>{props.nome}</h4>
      </S.Card>
      <S.Card>

          <S.Text>
          Na Sua opinião o Conteúdo programado para a matéria foi atendido?
            <br />
            <br />
            <input
              type="range"
              min={0}
              max={10}
              label={quest1}
              value={quest1}
              onChange={(e) => {
                setQuest1(e.target.value);
              }}
              list="tickmarks"
              className="slider"
            />
            <datalist id="tickmarks">
                <option value="0" label="0"></option>
                <option value="1" label="."></option>
                <option value="2" label="."></option>
                <option value="3" label="."></option>
                <option value="4" label="."></option>
                <option value="5" label="5"></option>
                <option value="6" label="."></option>
                <option value="7" label="."></option>
                <option value="8" label="."></option>
                <option value="9" label="."></option>
                <option value="10" label="10"></option>
              </datalist>
            <br/>
          </S.Text>

          {quest1 !== 0 && (
            <S.Text>
              Na sua opinião a explicações do conteúdo teórico foram claras e objetivas?
              <br />
              <br />
              <input
                type="range"
                min={0}
                max={10}
                label={quest2}
                value={quest2}
                onChange={(e) => {
                  setQuest2(e.target.value);
                }}
                list="tickmarks"
                className="slider"
              />
              <datalist id="tickmarks">
              <option value="0" label="0"></option>
                <option value="1" label="."></option>
                <option value="2" label="."></option>
                <option value="3" label="."></option>
                <option value="4" label="."></option>
                <option value="5" label="5"></option>
                <option value="6" label="."></option>
                <option value="7" label="."></option>
                <option value="8" label="."></option>
                <option value="9" label="."></option>
                <option value="10" label="10"></option>
              </datalist>
              <br/>
            </S.Text>
          )}
          {quest2 !== 0 && (
            <S.Text>
              Na sua opinião as explicações durante as atividades foram claras e objetivas?
              <br />
              <br />
              <input
                type="range"
                min={0}
                max={10}
                label={quest3}
                value={quest3}
                onChange={(e) => {
                  setQuest3(e.target.value);
                }}
                list="tickmarks"
                className="slider"
              />
              <datalist id="tickmarks">
              <option value="0" label="0"></option>
                <option value="1" label="."></option>
                <option value="2" label="."></option>
                <option value="3" label="."></option>
                <option value="4" label="."></option>
                <option value="5" label="5"></option>
                <option value="6" label="."></option>
                <option value="7" label="."></option>
                <option value="8" label="."></option>
                <option value="9" label="."></option>
                <option value="10" label="10"></option>
              </datalist>
              <br/>
            </S.Text>
          )}
          {quest3 !== 0 && (
            <S.Text>
             Na sua opinião a maneira que os exercícios foram propostos ajudaram na compreensão do conteúdo?
              <br />
              <br />
              <input
                type="range"
                min={0}
                max={10}
                label={quest4}
                value={quest4}
                onChange={(e) => {
                  setQuest4(e.target.value);
                }}
                list="tickmarks"
                className="slider"
              />
              <datalist id="tickmarks">
              <option value="0" label="0"></option>
                <option value="1" label="."></option>
                <option value="2" label="."></option>
                <option value="3" label="."></option>
                <option value="4" label="."></option>
                <option value="5" label="5"></option>
                <option value="6" label="."></option>
                <option value="7" label="."></option>
                <option value="8" label="."></option>
                <option value="9" label="."></option>
                <option value="10" label="10"></option>
              </datalist>
              <br/>
            </S.Text>
          )}
          {quest4 !== 0 && (
            <S.Text>
             Qual sua opinião geral sobre a matéria cursada em questão?
              <br />
              <br />
              <input
                type="range"
                min={0}
                max={10}
                label={quest5}
                value={quest5}
                onChange={(e) => {
                  setQuest5(e.target.value);
                }}
                list="tickmarks"
                className="slider"
              />
              <datalist id="tickmarks">
              <option value="0" label="0"></option>
                <option value="1" label="."></option>
                <option value="2" label="."></option>
                <option value="3" label="."></option>
                <option value="4" label="."></option>
                <option value="5" label="5"></option>
                <option value="6" label="."></option>
                <option value="7" label="."></option>
                <option value="8" label="."></option>
                <option value="9" label="."></option>
                <option value="10" label="10"></option>
              </datalist>
              <br/>
            </S.Text>
          )}
          {quest5 !== 0 && (
            <S.Text>
             Na sua opinião quais pontos podem melhorar na matéria em questão?
              <br />
              <br />
              <textarea rows={20} onChange={(e)=>{setQuest6(e.target.value)}}/>
              <br/>
            </S.Text>
          )}
          {quest5 !== 0 && (
            <S.Botao onClick={Envio}>Finalizar avaliação</S.Botao>
          )}
          

      </S.Card>
    </S.Espaco>
  );
};
export default Questoes;
