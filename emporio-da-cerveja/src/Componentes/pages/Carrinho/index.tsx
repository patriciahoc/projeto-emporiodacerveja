import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdRemove, IoIosAdd } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { CARRINHO_ACTIONS } from "../../../store/carrinho/action";

function Carrinho() {
  const carrinho = useSelector((state: any) => state.carrinho);
  const dispatch = useDispatch();

  const addItem = (item: any) => {
    dispatch({
      type: CARRINHO_ACTIONS.ADICIONA_QUANTIDADE,
      payload: item,
    });
  };
  const removeQtd = (item: any) => {
    dispatch({
      type: CARRINHO_ACTIONS.REMOVE_QUANTIDADE,
      payload: item,
    });
  };
  const removeItem = (item: any) => {
    dispatch({
      type: CARRINHO_ACTIONS.REMOVE_CARRINHO,
      payload: item,
    });
  };

  return (
    <div className="container-carrinho">
      {carrinho.itens.length === 0 ? (
        <h2>Carrinho vazio</h2>
      ) : (
        <>
          {carrinho.itens !== undefined &&
            carrinho.itens.map((item: any) => (
              <div key={item.produto.id} className="beer">
                <h2>{item.produto.title}</h2>
                <img src={item.produto.image} alt="Buzz" />
                <h3>{item.produto.description}</h3>
                <h3>{item.produto.price}</h3>
                <div className="container-button">
                  <button onClick={() => removeQtd(item)}>
                    <IoMdRemove />
                  </button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => addItem(item)}>
                    <IoIosAdd />
                  </button>
                </div>
                <div className="item-remover">
                  <button onClick={() => removeItem(item)} className="remover">
                    <TiDelete />
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Carrinho;
