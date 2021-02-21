import { CARRINHO_ACTIONS } from "./action";

const initialState = {
  itens: [],
  quantidade: 0,
};

export const carrinhoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CARRINHO_ACTIONS.ADD_CARRINHO:
      const itemCarrinho = { quantidade: 1, produto: action.payload };
      return {
        itens: [...state.itens, itemCarrinho],
        quantidade: state.quantidade + 1,
      };
    case CARRINHO_ACTIONS.REMOVE_CARRINHO:
      return {
        quantidade: state.quantidade - 1,
      };
    default:
      return state;
  }
};
