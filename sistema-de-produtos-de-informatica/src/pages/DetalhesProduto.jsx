import { useParams, Link } from "react-router-dom";
import { produtos } from "../data/produtos";

export default function DetalhesProduto() {

  const { id } = useParams();

  const produto = produtos.find(
    (produto) => produto.id === Number(id)
  );

  if (!produto) {
    return (
      <main className="container">
        <h1>Produto não encontrado</h1>

        <Link to="/">
          Voltar para produtos
        </Link>
      </main>
    );
  }

  return (
    <main className="container">

      <div className="detalhes-produto">

        <img
          src={produto.imagem}
          alt={produto.modelo}
        />

        <div>

          <h1>{produto.marca}</h1>

          <h2>{produto.modelo}</h2>

          <h3>Resumo</h3>

          <p>{produto.resumo}</p>

          <h3>Especificações</h3>

          <p>{produto.especificacoes}</p>

          <Link to="/" className="btn-voltar">
            Voltar
          </Link>

        </div>

      </div>

    </main>
  );
}