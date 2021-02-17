import React from "react";

function Login() {
  return (
    <div className="container-login">
      <div className="inputNome">
        <h4>Nome</h4>
        <input
          type="text"
          placeholder="Digite seu nome..."
          name="nome"
          id="nome"
        />
      </div>
      <div className="inputEmail">
        <h4>E-mail</h4>
        <input
          type="email"
          placeholder="Digite seu email..."
          name="email"
          id="email"
        />
      </div>
      <div className="inputPassword">
        <h4>Senha</h4>
        <input type="password" name="senha" id="senha" />
      </div>
      <div className="checkbox">
        <p>Você é maior de 18 anos?</p>
        <input type="checkbox" name="" id="" />
        <p>Sim</p>
        <input type="checkbox" name="" id="" />
        <p>Não</p>
      </div>
      <div className="botao">
        <button type="submit">Entrar</button>
      </div>
    </div>
  );
}
export default Login;
