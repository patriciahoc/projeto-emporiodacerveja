import axios from "axios";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { USUARIO_ACTIONS } from "../../../store/usuario/actions";
import { RiLockPasswordLine } from "react-icons/ri";

function Login() {
  const dispatch = useDispatch();
  const usuario = useSelector((state: any) => state.usuario);
  let inputNome = useRef<HTMLInputElement>(null);
  let inputEmail = useRef<HTMLInputElement>(null);
  let inputSenha = useRef<HTMLInputElement>(null);
  let inputIdade = useRef<HTMLInputElement>(null);

  const newUser = () => {
    const usuario = {
      name: inputNome.current?.value,
      email: inputEmail.current?.value,
      password: inputSenha.current?.value,
      age: inputIdade.current?.value,
    };

    if (usuario.age && +usuario.age >= 18) {
      axios.post("http://localhost:4000/users", usuario).then((resposta) => {
        dispatch({
          type: USUARIO_ACTIONS.POST_USUARIO,
          payload: {
            name: usuario.name,
            accessToken: resposta.data.accessToken,
          },
        });
      });
    } else {
      alert("Desculpe, essa página é para maiores de 18 anos!");
    }
  };

  return (
    <div className="container-login">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="container-input">
        <h4>Usuário</h4>
        <input type="text" placeholder="Digite seu nome..." ref={inputNome} />
      </div>
      <div className="container-input">
        <h4>E-mail</h4>
        <input
          type="email"
          placeholder="Digite seu email..."
          ref={inputEmail}
        />
      </div>
      <div className="container-input">
        <h4>Senha</h4>
        <input type="password" ref={inputSenha} />
        <RiLockPasswordLine />
      </div>
      <div className="container-input">
        <h4>Qual a sua idade?</h4>
        <input type="number" ref={inputIdade} min="0" />
      </div>
      <div className="botao">
        <button type="submit" onClick={newUser}>
          Entrar
        </button>
        {usuario.accessToken && <Redirect to="/bebidas" />}
      </div>
    </div>
  );
}
export default Login;
