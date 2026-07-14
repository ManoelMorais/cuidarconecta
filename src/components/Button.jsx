function Button({imagem, areaAtuacao}){
    return(
        <div className="btn-link">
             <img src={imagem} size={80} strokeWidth={1.5} />
            <h3>{areaAtuacao}</h3>
        </div>
    )
}
export default Button