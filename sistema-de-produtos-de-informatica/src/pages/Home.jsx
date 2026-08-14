import { produtos } from "../data/produtos";
import CardProduto from "../components/CardProduto";

export default function Home() {
  return (
    <main className="container">

      <h1>Sistema de Produtos de Informática</h1>

      <div className="lista-produtos">

        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
          />
        ))}

      </div>

    </main>
  );
}