import React from "react";
import './NewCollections.css';
import new_collection from '../Assets/new_collections';
import Item from '../Items/Item';
import { Card, CardBody, CardHeader,Text,SimpleGrid, Container } from "@chakra-ui/react";


const NewCollections = () => {
    return(
    <Card mt="4px"  bg="linear-gradient(180deg, #ecf4ff, transparent)">
        <CardHeader textAlign="center" padding="20px" fontWeight="600" textTransform="uppercase" fontSize="30px" pb="0px">
            <Text color="#717171">NEW COLLECTIONS</Text>
        </CardHeader>
        <CardBody display="flex">
        <Container  maxW={{base:"70%",md:"70%",lg:"5xl",xl:"6xl"}}>
        <SimpleGrid templateColumns={{base:"repeat(1, minmax(10%, 1fr))",md:"repeat(2, minmax(200px, 1fr))",lg:"repeat(4, minmax(200px, 1fr))",xl:"repeat(4, minmax(250px, 1fr))"}}gap="20px" >
            {new_collection.map((item,i)=>{ 
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
             })
            }
         </SimpleGrid>
         </Container>
        </CardBody>
    </Card>
    )
}

export default NewCollections;