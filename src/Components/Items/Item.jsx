import React from "react";
import './Item.css';
import { Link } from "react-router-dom";
import { Card, CardBody,SimpleGrid } from "@chakra-ui/react";
const Item = (props) => {
    return (
        <Card _hover={{transform:"scale(1.05)",transition:"0.6s" }} marginBottom="20px">
            <CardBody justifyContent="center">
                <Link to={`/product/${props.id}`} ><img src={props.image} alt="" style={{width:"100%"}}/></Link>
                <p>{props.name}</p>
                <div className="item-prices">
                <div className="item-price-new">${props.new_price}</div>
                <div className="item-price-old">${props.old_price}</div>
                </div>
            </CardBody>
        </Card>
       
    )
}
export default Item;