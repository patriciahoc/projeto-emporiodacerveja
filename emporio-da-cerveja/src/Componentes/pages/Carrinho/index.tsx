import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Contagem from "./Contagem";
import Adicionar from "./Adicionar"
import Remover from "./Remover"

interface Itens {
  contador:number;

}
const initialState: Itens ={
  contador:0,
}

function reducer(state = initialState, action:any){
  switch (action.type) {
    case "ADICIONAR":
      return{
        contador:state.contador + 1
      }
      case "REMOVER":
        return{
          contador:state.contador >0 ? state.contador - 1 : state.contador,
        }
      
  
    default:
      return state;
  }
}
const contador = createStore(reducer)

function Carrinho(){

 

  return(
    <div className="container-carrinho">
      
      <Provider store={contador}>
      <Adicionar/>
      <Contagem/>
      <Remover/>
      </Provider>
      
    </div>
  
  )
}

export default Carrinho