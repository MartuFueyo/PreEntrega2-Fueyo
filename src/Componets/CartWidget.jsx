import bag from "../img/bag.svg"

const CartWidget = () =>{
    return (
        <button  type="button" className= "btn btn-dark btn btn-outline-light position-relative ">
            <img src={bag} alt="Carrito" width={25} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1 </span>
        </button>
    )
}

export default CartWidget;