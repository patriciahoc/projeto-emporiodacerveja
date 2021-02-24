import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Redirect } from "react-router-dom";
import { CARRINHO_ACTIONS } from "../../../store/carrinho/action";
import { BeerTypes } from "./types/BeerTypes";

function Home() {
  const dispatch = useDispatch();
  const [beer, setBeer] = useState<BeerTypes[]>([]);
  const usuario = useSelector((state: any) => state.usuario);

  const fetchBeers = async () => {
    if (usuario.accessToken !== null) {
      const headers = {
        Authorization: `Bearer ${usuario.accessToken}`,
      };
      const resposta = await axios.get("http://localhost:4000/beers", {
        headers,
      });
      setBeer(resposta.data);
    }
  };
  useEffect(() => {
    fetchBeers();
  }, [usuario]);

  const comprarBeer = (item: any) => {
    dispatch({ type: CARRINHO_ACTIONS.ADD_CARRINHO, payload: item });
  };

  return !usuario.accessToken ? (
    <Redirect to="/" />
  ) : (
    <div className="container-home">
      {beer !== undefined &&
        beer.map((item) => (
          <div key={item.id} className="beer">
            <h2>{item.title}</h2>
            <img src={item.image} alt="Buzz" />
            <h3>{item.description}</h3>
            <h3>{item.price}</h3>
            <button onClick={() => comprarBeer(item)}>Comprar</button>
          </div>
        ))}
    </div>
  );
}

export default Home;
