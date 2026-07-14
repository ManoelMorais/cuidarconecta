import Cards from "../components/Cards";

function Menu() {
  return (
    <div>
      <h2>DESTAQUES</h2>

      <div className="cards-grid">
        <Cards
          imagem="fototeste.webp"
          nome="natalia"
          valorhora="R$ 30/h"
          cidade="aracaju"
          estado="SE"
          avaliacao="4.9"
        />

        <Cards
          imagem="fototeste.webp"
          nome="natalia"
          valorhora="R$ 30/h"
          cidade="aracaju"
          estado="SE"
          avaliacao="4.9"
        />

        <Cards
          imagem="fototeste.webp"
          nome="natalia"
          valorhora="R$ 30/h"
          cidade="aracaju"
          estado="SE"
          avaliacao="4.9"
        />

        <Cards
          imagem="fototeste.webp"
          nome="natalia"
          valorhora="R$ 30/h"
          cidade="aracaju"
          estado="SE"
          avaliacao="4.9"
        />
      </div>
    </div>
  );
}

export default Menu;

