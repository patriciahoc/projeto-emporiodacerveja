import { STATUS_CODES } from "http";
import { CARRINHO_ACTIONS } from "./action";

interface Carrinho {
  itens: any[];
  quantidade: number;
}
const initialState: Carrinho = {
  itens: [],
  quantidade: 0,
};

export const carrinhoReducer = (state = initialState, action: any) => {
  let item: any = null;
  let itens: any[] = [];

  switch (action.type) {
    case CARRINHO_ACTIONS.ADD_CARRINHO:
      item = { quantidade: 1, produto: action.payload };
      return {
        itens: [...state.itens, item],
        quantidade: state.quantidade + 1,
      };
    case CARRINHO_ACTIONS.REMOVE_CARRINHO:
      return {
        quantidade: state.quantidade - 1,
      };
    case CARRINHO_ACTIONS.ADICIONA_QUANTIDADE:
      item = action.payload;
      itens = state.itens.filter((x: any) => x.produto.id !== item.produto.id);

      item.quantidade = item.quantidade + 1;

      return {
        itens: [...itens, item],
        quantidade: state.quantidade + 1,
      };
    case CARRINHO_ACTIONS.REMOVE_QUANTIDADE:
      item = action.payload;
      itens = state.itens.filter((x: any) => x.produto.id !== item.produto.id);

      item.quantidade = item.quantidade - 1;
      if (item.quantidade === 0) {
        return {
          itens: [...itens],
          quantidade: state.quantidade - 1,
        };
      }

      return {
        itens: [...itens, item],
        quantidade: state.quantidade - 1,
      };

    default:
      return state;
  }
};
