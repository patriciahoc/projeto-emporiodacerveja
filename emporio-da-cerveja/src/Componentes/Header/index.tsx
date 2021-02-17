import React from "react";
import { NavLink } from "reactstrap";
import imagem1 from "../../img/imagem1.png";
import imagem2 from "../../img/imagem2.png";
import { FiUser } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div className="wrap">
      <div className="header">
        <p>
          A Maior <span> Loja Especializada de Cervejas </span> do Brasil.
        </p>
      </div>
      <div className="container-header">
        <div className="image">
          <a href="/">
            <img src={imagem1} alt="logo" />

            <img src={imagem2} alt="Emporio da cerveja" />
          </a>
        </div>
        <div className="navbar">
          <FiUser /> <NavLink href="/cadastro"> Login</NavLink>
          <FaShoppingCart /> <NavLink href="/carrinho">Carrinho</NavLink>
        </div>
      </div>
    </div>
  );
}
export default Header;
