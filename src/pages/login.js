import {useState} from 'react'
import * as S from '../components/Login/styled'
import axios from 'axios'
const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const Enviar = async () => {
        const json =axios.post('https://www4.fag.edu.br/api_avaliacao/fag.php',
        JSON.stringify({
            usuario:usuario,
            senha: senha,
            PG: "login",
          })   
        )
        const { status } = (await json).data;
          
        if (status !== 0) {
          window.location.href = '/admin/relatorios';
        }else {
            alert('Usuario ou senha invalidos');
            setUsuario('');
            setSenha('');

        }
    }

    return (
        <S.Container>
            <S.Card>
                <h1>Login</h1>
                <input type="text" placeholder="Usuario" onChange={(e)=>{setUsuario(e.target.value)}} value={usuario} required/>
                <input type="password" placeholder="Senha" onChange={(e)=>{setSenha(e.target.value)}} value={senha} required/>
                <S.Botao onClick={Enviar}>Entrar</S.Botao>
            </S.Card>
        </S.Container>
    );

}
export default Login; 