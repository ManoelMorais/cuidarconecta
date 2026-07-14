function Cards({imagem, nome, cidade, estado, valorhora, turnos,areaAtuacao, avaliacao}){
    return(
        <div className="container">
    
        <div className="card-img">
            <img src={imagem}  />
        </div>

        <div className="card-info">
           <h3>{nome}</h3>
           <h4>{valorhora}</h4>
           <p>{cidade}-{estado}</p>
            <p>{avaliacao}</p>
            <span>{areaAtuacao}</span>
        </div>
        </div>
    );
}

export default Cards;