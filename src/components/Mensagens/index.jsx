

import axios from 'axios'
import { useEffect, useState } from 'react';


const Mensagem = (props) => {
    const [mensagens, setMensagens] = useState([]);

    const att = async () => {
        const json = axios.post('https://www4.fag.edu.br/api_avaliacao/fag.php',
            JSON.stringify({
                turma: props.turma,
                quest: 'quest6',
                PG: "mensagem"
            }));

        const { data } = (await json).data;

        setMensagens(data);
        console.log(data)
    }
    useEffect(() => {
        att();

    }, [])

    return (
        <div>
            <h1>{props.turma}</h1>
            {mensagens.map((mensagen) => {
                return (
                    <div style={{ background: '#fefefe', marginTop: '2rem', marginLeft: '2rem', marginRight: '2rem', padding: '2rem', border: '1px solid #c9cdd3' }}>
                        {mensagen.quest}
                    </div>
                )

            })}



        </div>

    );
}
export default Mensagem;

