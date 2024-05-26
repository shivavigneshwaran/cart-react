import React, { useContext } from "react";
import './CSS/shopcategory.css';
import { ShopContext } from "../Context/ShopContext";
import dropdown from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item';
import { Box, Button, Spacer,Text,Card,CardBody,Container,SimpleGrid,CardHeader, Divider } from "@chakra-ui/react";


const ShopCategory = (props) => {
    const {all_product}= useContext(ShopContext);
    return (
        <Box className="shopcategory" >
            <img src={props.banner} className="shopcategory-banner" alt="banner" />

            <Box  className="shopcategory-indexsort">
                <Text><span>Showing 1 to 12</span> out of 36 products</Text>
                <Spacer/>
                <Button> Sort by <img src={dropdown} alt="" /></Button>
            </Box>

            <Card mt="4px" width="82%" display="contents">
                <CardHeader textAlign="center" padding="20px" fontWeight="600" textTransform="uppercase" fontSize="30px" pb="0px">
                <Text color="#717171" textTransform="uppercase">{props.category} COLLECTIONS</Text>
                <Divider/>
                </CardHeader>
                
                <CardBody display="flex">
                <Container  maxW='6xl'>
                <SimpleGrid templateColumns='repeat(4, minmax(250px, 1fr))'gap="20px" >
                    {all_product.map((item,i) => { 
                        if(props.category===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        }
                        else{
                            return null;
                        }
                    })}
                </SimpleGrid>
                </Container>
                </CardBody>
            </Card>
        </Box>
    )
}

export default ShopCategory;