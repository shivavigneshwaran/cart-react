import React, { useContext } from "react";
import './CSS/shopcategory.css';
import { ShopContext } from "../Context/ShopContext";
import dropdown from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item';
import { Box, Button, Spacer,Text,Card,CardBody,Container,SimpleGrid,CardHeader, Divider } from "@chakra-ui/react";


const ShopCategory = (props) => {
    const {all_product}= useContext(ShopContext);
    const maxx={
        base:"100%",md:"100%",lg:"82%",xl:"82%"
    }
    return (
        <Box className="shopcategory">
          <img 
            src={props.banner} 
            className="shopcategory-banner" 
            style={{
                width: {base:"100%",md:"100%",lg:"82%",xl:"82%"},
                maxWidth:  '82%',
                display: 'block',
                margin: '0 auto'
            }} 
            alt="banner" 
            
            />

            <Box  className="shopcategory-indexsort" p={{base:"20px 25px 0px 15px;",md:"20px 72px 0px 72px",lg:"20px 102px 0px 102px",xl:"20px 140px 0px 140px"}}>
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
                <Container  maxW={{base:"50%",md:"70%",lg:"5xl",xl:"6xl"}}>
                <SimpleGrid templateColumns={{base:"repeat(1, minmax(200px, 1fr))",md:"repeat(2, minmax(200px, 1fr))",lg:"repeat(4, minmax(200px, 1fr))",xl:"repeat(4, minmax(250px, 1fr))"}} gap="20px" >
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