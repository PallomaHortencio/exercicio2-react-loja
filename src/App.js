import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function getProdutos() {
      try {
        const resposta = await fetch(`'https://fakestoreapi.com/products'`);
        const dados = await resposta.json();

        console.log(dados);
        setProdutos(dados);
      } catch (error) {
        console.log("Deu ruim na busca do post: " + error.message);
      }
    }
  });

  return (
    <section>
      <h2>Nossos Produtos</h2>
    </section>
  );
};

export default Produtos;
