import { USUARIO_ACTIONS } from "./actions";

const initialState = {
  name: null,
  accessToken: null,
};

export const usuarioReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USUARIO_ACTIONS.POST_USUARIO:
      const { name, accessToken } = action.payload;
      return { name, accessToken };
    case USUARIO_ACTIONS.SAIR:
      return { name: null, accessToken: null };
    default:
      return state;
  }
};
