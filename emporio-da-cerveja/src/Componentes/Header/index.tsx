import React from "react";
import { NavLink } from "reactstrap";
import imagem1 from "../../img/imagem1.png";
import imagem2 from "../../img/imagem2.png";
import { FiUser } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import Login from "../pages/Login";

function Header() {
  const carrinho = useSelector((state: any) => state.carrinho);

  return (
    <div className="wrap">
      <div className="header">
        <p>
          A Maior <span> Loja Especializada de Cervejas </span> do Brasil.
        </p>
      </div>
      <div className="container-header">
        <div className="image">
          <img src={imagem1} alt="logo" />

          <img src={imagem2} alt="Emporio da cerveja" />
        </div>
        <div className="navbar">
          <NavLink href="/" readOnly>
            <FiUser /> Login
          </NavLink>
          <NavLink href="/carrinho" readOnly>
            <FaShoppingCart />
            <span>{carrinho.price}</span>
            <span>{carrinho.quantidade}</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Header;
