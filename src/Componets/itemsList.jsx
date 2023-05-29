import Item from "./Item"

const ItemsList = ({items}) => {
    return (
        <>
            {items.map(item => <Item key={item.idx} item={item} />)}
        </>
    )
}



export default ItemsList; 