import { useEffect, useState } from "react";
import ItemsList from "./itemsList";
import productos from "./json/productos.json"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams ()

    useEffect (() => {
        const promesa = new Promise ((resolve) => {
            setTimeout (() => {
                resolve (id ? productos.filter (item => item.categoria === id) : productos)
            }, 2000);

        });

        promesa.then (data => {
            setItems(data);
        })
    }, [id]);


    return (
        <div className="container">
            <div className="row text-center p-5">    
            <ItemsList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;