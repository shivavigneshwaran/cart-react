import react from "react";
import data_product from "../Assets/data";
import Item from "../Items/Item";
import './Poppular.css';
const Poppular = () => {
    return (
    <div className={'popular'}>
        <h1>Poppular In Women</h1>
        <hr/>
        <div className="poppular-item">
            {data_product.map((item,i) => { 
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
        </div>
    </div>
    )
}

export default Poppular;