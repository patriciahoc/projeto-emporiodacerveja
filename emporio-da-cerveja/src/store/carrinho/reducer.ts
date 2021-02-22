import { CARRINHO_ACTIONS } from "./action";

interface Carrinho {
  itens: any[];
  quantidade: number;
  valorTotal: number;
}
const initialState: Carrinho = {
  itens: [],
  quantidade: 0,
  valorTotal: 0,
};

function montaEstado(itens: any[]) {
  const quantidade = itens
    .map(({ quantidade }) => quantidade)
    .reduce((x, y) => x + y, 0);

  const valorTotal = itens
    .map(
      ({ quantidade, produto }) =>
        quantidade * +produto.price.replace("R$ ", "").replace(",", ".")
    )
    .reduce((x, y) => x + y, 0);

  return {
    itens,
    quantidade,
    valorTotal: valorTotal.toFixed(2),
  };
}
function addCarrinho(state: Carrinho, produto: any) {
  const item = { quantidade: 1, produto };
  const itens = state.itens.filter((x: any) => x.produto.id !== produto.id);

  const [itemFiltrado] = state.itens.filter(
    (x: any) => x.produto.id === produto.id
  );

  if (itemFiltrado) {
    item.quantidade = itemFiltrado.quantidade + 1;
  }

  return montaEstado([...itens, item]);
}

export const carrinhoReducer = (state = initialState, action: any) => {
  let item: any = null;
  let itens: any[] = [];

  switch (action.type) {
    case CARRINHO_ACTIONS.ADD_CARRINHO:
      return addCarrinho(state, action.payload);
    case CARRINHO_ACTIONS.REMOVE_CARRINHO:
      item = action.payload;
      itens = state.itens.filter((x: any) => x.produto.id !== item.produto.id);

      return montaEstado([...itens]);
    case CARRINHO_ACTIONS.ADICIONA_QUANTIDADE:
      item = action.payload;
      itens = state.itens.filter((x: any) => x.produto.id !== item.produto.id);

      item.quantidade = item.quantidade + 1;

      return montaEstado([...itens, item]);
    case CARRINHO_ACTIONS.REMOVE_QUANTIDADE:
      item = action.payload;
      itens = state.itens.filter((x: any) => x.produto.id !== item.produto.id);

      item.quantidade = item.quantidade - 1;

      if (item.quantidade === 0) {
        return montaEstado([...itens]);
      } else {
        return montaEstado([...itens, item]);
      }

    case CARRINHO_ACTIONS.LIMPAR_CARRINHO:
      return montaEstado([]);
    default:
      return state;
  }
};
