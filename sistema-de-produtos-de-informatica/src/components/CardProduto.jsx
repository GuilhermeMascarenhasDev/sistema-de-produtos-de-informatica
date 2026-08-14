import { Link } from "react-router-dom";

export default function CardProduto({ produto }) {
  return (
    <div className="card-produto">

      <img
        src={produto.imagem}
        alt={produto.modelo}
      />

      <div className="card-conteudo">
        <h2>{produto.marca}</h2>

        <h3>{produto.modelo}</h3>

        <p>{produto.resumo}</p>

        <Link
          to={`/produto/${produto.id}`}
          className="btn-detalhes"
        >
          Ver detalhes
        </Link>
      </div>

    </div>
  );
}