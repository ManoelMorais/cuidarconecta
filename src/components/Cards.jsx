function Cards({
  colaborador,
  imagem,
  nome,
  cidade,
  estado,
  valorhora,
  areaAtuacao,
  avaliacao,
}) {
  const nomeCompleto = colaborador?.nomeCompleto ?? nome ?? "Sem nome";
  const cidadeColaborador = colaborador?.cidade ?? cidade ?? "";
  const estadoColaborador = colaborador?.estado ?? estado ?? "";
  const area = colaborador?.areaAtuacao ?? areaAtuacao ?? "";
  const nota = colaborador?.avaliacoes?.notaMedia ?? avaliacao ?? "-";
  const valorHoraNumerico = colaborador?.valores?.valorHora;
  const valorHoraTexto =
    valorHoraNumerico !== undefined && valorHoraNumerico !== null
      ? new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valorHoraNumerico)
      : (valorhora ?? "");
  const foto = imagem ?? "/fototeste.webp";

  return (
    <div className="container">
      <div className="card-img">
        <img src={foto} alt={nomeCompleto} />
      </div>

      <div className="card-info">
        <h3>{nomeCompleto}</h3>
        <h4>{area}</h4>
        <p>
          {cidadeColaborador} - {estadoColaborador}
        </p>
        <p>Avaliação: {nota}</p>
        <span>Valor por hora: {valorHoraTexto}</span>
      </div>
    </div>
  );
}

export default Cards;
