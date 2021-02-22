import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { usuarioReducer } from "./usuario/reducer";
import { carrinhoReducer } from "./carrinho/reducer";

const persistConfig = {
  key: "root",
  storage,
};

// O hook PersistStore e PersistReducer: restauram dados no caso dos usuários atualizarem a página ou evitar a perda de dados
// se algo inesperado acontecer, ira usar o useEffect para reidratar dados quando o componente
// é montado e hidratar dados quando o estado muda.

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    usuario: usuarioReducer,
    carrinho: carrinhoReducer,
  })
);

const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export { store, persistor };
