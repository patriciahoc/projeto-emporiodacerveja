import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { BeerTypes } from "./types/BeerTypes";

function Home() {
  const [beer, setBeer] = useState<BeerTypes[]>([]);
  const usuario = useSelector((state: any) => state.usuario);

  useEffect(() => {
    if (usuario.accessToken !== null) {
      const headers = {
        Authorization: `Bearer ${usuario.accessToken}`,
      };

      axios
        .get("http://localhost:4000/beers", { headers })
        .then((resposta) => setBeer(resposta.data));
    }
  }, [usuario]);

  const comprarBeer = () => {
    <Redirect to="/carrinho" />;
  };

  return !usuario.accessToken ? (
    <Redirect to="/cadastro" />
  ) : (
    <div className="container-home">
      {beer !== undefined &&
        beer.map((item) => (
          <div key={item.id} className="beer">
            <h2>{item.title}</h2>
            <img src={item.image} alt="Buzz" />
            <h3>{item.description}</h3>
            <h3>{item.price}</h3>
            <button onClick={comprarBeer}>Comprar</button>
          </div>
        ))}
    </div>
  );
}

export default Home;
