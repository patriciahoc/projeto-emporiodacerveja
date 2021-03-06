import React, { useEffect, useState } from "react";
import { NavLink } from "reactstrap";
import imagem1 from "../../img/imagem1.png";
import imagem2 from "../../img/imagem2.png";
import { FiUser } from "react-icons/fi";
import { FaPowerOff } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { CARRINHO_ACTIONS } from "../../store/carrinho/action";
import { USUARIO_ACTIONS } from "../../store/usuario/actions";
import { useHistory } from "react-router-dom";
import { Categories } from "./types";
import axios from "axios";

function Header() {
  const dispatch = useDispatch();
  // O hook useHistory: permite acessar o estado e realizar a navegação de dentro do componentes.
  const history = useHistory();
  const carrinho = useSelector((state: any) => state.carrinho);
  const usuario = useSelector((state: any) => state.usuario);

  const [categorias, setCategorias] = useState<Categories[]>([]);

  const fetchCategories = async () => {
    if (usuario.accessToken !== null) {
      const headers = {
        Authorization: ` Bearer ${usuario.accessToken}`,
      };
      const category = await axios.get("http://localhost:4000/categories", {
        headers,
      });
      setCategorias(category.data);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, [usuario]);

  const sair = () => {
    dispatch({ type: CARRINHO_ACTIONS.LIMPAR_CARRINHO });
    dispatch({ type: USUARIO_ACTIONS.SAIR });

    history.push("/");
  };

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
          {!usuario.accessToken ? (
            <NavLink href="/">
              <FiUser /> Login
            </NavLink>
          ) : (
            <div onClick={() => sair()} className="sair">
              <FaPowerOff /> Sair
            </div>
          )}

          <span>
            <NavLink href="/carrinho">
              <FaShoppingCart />
              <span>R$ {carrinho.valorTotal}</span>
              <span className="carrinho-quantidade">{carrinho.quantidade}</span>
            </NavLink>
          </span>
        </div>
      </div>
      {usuario.accessToken !== null && (
        <div className="container-categorias">
          {categorias !== undefined &&
            categorias.map((item, i) => (
              <div key={i} className="categorias-item">
                <NavLink>
                  <li>{item}</li>
                </NavLink>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
export default Header;
