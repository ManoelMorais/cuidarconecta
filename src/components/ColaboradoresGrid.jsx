import colaboradores from "../../base_dados_cuidadores.json";
import Cards from "./Cards";

const removerAcentos = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const filtrosPorTela = {
  Babas: ["baba", "babas"],
  Idosos: ["idoso"],
  Pcd: ["deficiencia", "pcd"],
  AcompDomiciliar: ["acompanhante domiciliar", "acompanhante"],
  TecEnfermagem: ["tecnico de enfermagem", "enfermagem"],
  Hospitalar: ["hospital"],
};

function filtrarColaboradores(tela) {
  if (!tela) {
    return colaboradores;
  }

  const termos = filtrosPorTela[tela];

  if (!termos) {
    return colaboradores;
  }

  return colaboradores.filter((colaborador) => {
    const areaAtuacao = removerAcentos(colaborador.areaAtuacao);
    return termos.some((termo) => areaAtuacao.includes(termo));
  });
}

export default function ColaboradoresGrid({ titulo, tela, limite }) {
  const base = filtrarColaboradores(tela);
  const lista = tela
    ? base.slice(0, limite ?? Infinity)
    : [...base]
        .sort(
          (a, b) =>
            (b.avaliacoes?.notaMedia ?? 0) - (a.avaliacoes?.notaMedia ?? 0),
        )
        .slice(0, limite ?? Infinity);

  return (
    <div>
      <h2>{titulo}</h2>

      <div className="cards-grid">
        {lista.length > 0 ? (
          lista.map((colaborador) => (
            <Cards key={colaborador.id} colaborador={colaborador} />
          ))
        ) : (
          <p>Nenhum colaborador encontrado para essa categoria.</p>
        )}
      </div>
    </div>
  );
}
