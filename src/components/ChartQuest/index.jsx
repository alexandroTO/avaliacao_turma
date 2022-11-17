
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios'
import { useEffect, useState } from 'react';


const ChartQuest = (props) => {
    const [info, setInfo] = useState(['']);
    
    const att = async (quest) => {
        const json = axios.post('https://www4.fag.edu.br/api_avaliacao/fag.php',
        JSON.stringify({
            turma:props.turma,
            quest: props.quest,
            PG: "nota"
            }));
        
            const{ data } = (await json).data;
            console.log(props.turma)
            setInfo(data)
    }
    useEffect(()=>{
        att();

    },[])

    return (
        <div style={{background:'#fefefe', marginTop:'2rem',marginLeft:'2rem',marginRight:'2rem', padding:'2rem'}}>
            <h1>{props.titulo}</h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <AreaChart
                    width={500}
                    height={400}
                    data={info}
                
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nome" />
                    <YAxis domain={[0, 'dataMax+0.2']} />
                    <Tooltip />
                    <Area type="monotone" dataKey="Respostas" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>

    );
}
export default ChartQuest;

