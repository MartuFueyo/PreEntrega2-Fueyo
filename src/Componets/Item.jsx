import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
    <>
        <div  className="container col-md-4 my-3" >
            <div className="card border-dark mb-3">
                <Link to ={"/item/"+ item.idx} className="text-dark text-decoration-none">
                <img src={item.Imagen} className="card-img-fluid w-25 h-50 p-10" alt={item.titulo}/>
                    <div className="card-body">
                        <h3>{item.titulo}</h3>
                        <p className="card-text">{item.descripcion}<br/><b>${item.Precio}</b></p>
                    </div>
                </Link>
            </div>
        </div>
    </>
    )
    
}

export default Item;