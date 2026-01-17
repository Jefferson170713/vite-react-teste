const Card = ({ nome, categoria, preco, imagem}) => {
    return ( 
        <div>
            <img 
                src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png" 
                alt=""
            />
            <h3>{nome}</h3>
            <h4>{categoria}</h4>
            <h6>R$ {preco}</h6>
        </div>
    );
}
 
export default Card;