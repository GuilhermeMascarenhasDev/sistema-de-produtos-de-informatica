import { useState } from "react";
import { produtos } from "../data/produtos";
import CardProduto from "../components/CardProduto";

export default function Home() {
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((produto) => {
    const termo = busca.toLowerCase();
    return (
      produto.marca.toLowerCase().includes(termo) ||
      produto.modelo.toLowerCase().includes(termo)
    );
  });

  return (
    <main className="container">

      <h1>Sistema de Produtos de Informática</h1>

      <div className="barra-busca">
        <input
          type="text"
          placeholder="Buscar por marca ou modelo..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {produtosFiltrados.length === 0 ? (
        <p className="sem-resultados">Nenhum produto encontrado.</p>
      ) : (
        <div className="lista-produtos">
          {produtosFiltrados.map((produto) => (
            <CardProduto
              key={produto.id}
              produto={produto}
            />
          ))}
        </div>
      )}

    </main>
  );
}