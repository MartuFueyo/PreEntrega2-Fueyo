import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-3">
                    <img src={producto.Imagen} alt={producto.titulo} className="img-fluid" />
                </div>
                <div className="col-md-3">
                    <h1 className="text-light-emphasis">{producto.titulo}</h1>
                    <h3>{producto.descripcion}</h3>
                    <p><b>${producto.Precio}</b></p>
                    <ItemCount stock={producto.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;