import axios from "axios";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { USUARIO_ACTIONS } from "../../../store/usuario/actions";
import { RiLockPasswordLine } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const API = "http://localhost:4000";

function Login() {
  const dispatch = useDispatch();
  const usuario = useSelector((state: any) => state.usuario);
  let inputNome = useRef<HTMLInputElement>(null);
  let inputEmail = useRef<HTMLInputElement>(null);
  let inputSenha = useRef<HTMLInputElement>(null);
  let inputIdade = useRef<HTMLInputElement>(null);

  const validaForm = async (form: any) => {
    if (!form.name || form.name.length < 3) {
      toast.error("Campo nome deve ter ao menos 3 letras!");
      return false;
    }

    if (!form.email || form.email.length === 0) {
      toast.error("Campo email vazio");
      return false;
    }

    if (!form.age || +form.age < 18) {
      toast.error("Acesso apenas para maiores de 18 ano!");
      return false;
    }

    if (!form.password || +form.password.length < 8) {
      toast.error("Senha deve conter 8 digitos");
      return false;
    }
    const resposta = await axios.get(`${API}/users?email=${form.email}`);
    if (resposta.data.length > 0) {
      toast.error(`O email ${form.email} já existe`);
      return false;
    }

    return true;
  };

  const newUser = async () => {
    const usuario = {
      name: inputNome.current?.value,
      email: inputEmail.current?.value,
      password: inputSenha.current?.value,
      age: inputIdade.current?.value,
    };

    const formValido = await validaForm(usuario);

    if (formValido) {
      try {
        const resposta = await axios.post(`${API}/users`, usuario);
        dispatch({
          type: USUARIO_ACTIONS.POST_USUARIO,
          payload: {
            name: usuario.name,
            accessToken: resposta.data.accessToken,
          },
        });
      } catch (erro) {
        if (erro.request.status === 404) {
          toast.error("Não foi possivel acessar a página");
        }
        if (erro.request.status === 400) {
          toast.error("Página não encontrada");
        }
        if (erro.request.status === 403) {
          toast.error("Você não pode acessar essa página");
        }
      }
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
        <Toaster />
        {usuario.accessToken && <Redirect to="/bebidas" />}
      </div>
    </div>
  );
}
export default Login;
