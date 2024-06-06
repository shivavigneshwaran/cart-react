import react from "react";
import data_product from "../Assets/data";
import Item from "../Items/Item";
import { Box, Card, CardBody, CardHeader, Container, HStack, Text } from "@chakra-ui/react";
const Poppular = () => {
    return (
    <Box bg="linear-gradient(360deg, #ecf4ff, transparent)" mt="10px">
    <Card>
        <CardHeader textAlign="center" padding="20px 20px 0px 20px">
            <Text color="#717171" fontWeight="600" textTransform="uppercase" fontSize="30px">Poppular In Women</Text>
        </CardHeader>
        <CardBody justifyContent="center" display="flex">
            <Card gap="30px" p="20px" w="85%">
                <CardBody>
                    <HStack w={{md:"100%"}} h="auto" mt={{base:"10px"}} gap={{md:"20px",lg:"60px",xl:"60px"}} flexDirection={{base:"column",md:"row",lg:"row",xl:"row"}}>     
                        {
                            data_product.map((item,i) => { 
                                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                            })
                        }
                    </HStack>
                </CardBody>
            </Card>
        </CardBody>
    </Card>
    </Box>
    )
}

export default Poppular;