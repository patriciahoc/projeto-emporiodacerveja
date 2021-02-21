import React from "react";
import { useSelector } from "react-redux";
import { IoMdRemove, IoIosAdd } from "react-icons/io";
import { TiDelete } from "react-icons/ti";

function Carrinho() {
  const carrinho = useSelector((state: any) => state.carrinho);

  return (
    <div className="container-carrinho">
      {carrinho.itens !== undefined &&
        carrinho.itens.map((item: any) => (
          <div key={item.produto.id} className="beer">
            <div className="item-remover">
              <span>
                <TiDelete />
              </span>
            </div>
            <h2>{item.produto.title}</h2>
            <img src={item.produto.image} alt="Buzz" />
            <h3>{item.produto.description}</h3>
            <h3>{item.produto.price}</h3>
            <div className="container-button">
              <button>
                <IoMdRemove />
              </button>
              <span>0</span>
              <button>
                <IoIosAdd />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Carrinho;
