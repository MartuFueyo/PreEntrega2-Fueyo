import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    
    const incrementarStock = () => {
        if (items < itemStock){ 
            setItems (items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1){
            setItems(items - 1);
        }
    }

    const onAdd = () => {
        if (items <= itemStock){ 
            setItemStock (itemStock - items);
            setItems (1);
        }
    }

    useEffect (() => { 
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="row">
            <div className="col">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-dark" onClick={decrementarStock}>-</button>
                    <button type="button" className="btn btn-dark ">{items}</button>
                    <button type="button" className="btn btn-dark" onClick={incrementarStock}>+</button>
                </div>
            </div>
            <div className="row">
                <div className="col m-3">
                    <button type="button" className="btn btn-dark" onClick={onAdd}>Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;