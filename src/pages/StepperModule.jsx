import React from "react";
import {
    Box,Card,Select,Checkbox, CheckboxGroup ,CardHeader,CardFooter,Heading,CardBody,Stack,Input,Button,Text,GridItem,Grid,Divider,HStack,VStack,Image,IconButton,Flex,Hide,Show,Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,FormControl,FormLabel,FormErrorMessage,FormHelperText,
  } from "@chakra-ui/react";
import { Link,useNavigate  } from 'react-router-dom';
import paypal from "../Components/Assets/paypal.png";
import visa from "../Components/Assets/visa.png";
import mastercard from "../Components/Assets/mastercard.png";
import AmericanExpress from "../Components/Assets/American_Express_logo.png";
import { Radio, RadioGroup } from '@chakra-ui/react';


const StepperModule = ()=>{
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()

    const [value, setValue] = React.useState('1')
    const steps = [
        { title: 'Delevery Address', description: 'select Address' },
        { title: 'Payment', description: 'Select Payment Option' },
      ];
      
      
    // const { activeStep,setActiveStep  } = useSteps({
    //       index: 0,
    //       count: steps.length,
    //   });

    // const handleNext = () => {
    //   if(activeStep < steps.length){

    //     setActiveStep((prev)=>prev +1);

    //   }

    //   return false
      
    
    // }

    // const handleBack = () => {
    //   if(activeStep > 0 && activeStep !== 0){

    //     setActiveStep((prev)=>prev - 1);

    //   }

    //   return false
      
    
    // }

    // console.log('activeStep',activeStep);
      
    return (<>
        <Box m={{base:"0px 0px",md:"5px 10px",lg:"10px 50px",xl:"10px 50px"}} bgGradient="linear-gradient(180deg, #ecf4ff, #e1ffea 70%)">
      <Box
        minH={"400px"}
        gap={8}
        p={{base:"0px",md:"25px",lg:"25px",xl:"25px"}}
      >
        <HStack alignItems=''>
        <Box w="70%">
        <Accordion defaultIndex={[0]} allowMultiple>
          
        <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box as='span' flex='1' textAlign='left'>
                Select a delivery address
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Card size={"sm"} borderRadius={"20px"}>
                <CardBody>
                  <Stack>
                    <Text padding={"10px"} fontWeight={"bold"}>Your addresses</Text>
                    <Box>
                      <RadioGroup onChange={setValue} value={value}>
                        <VStack direction='row' display={"grid"} ml="5%">
                          <Radio value='1'>Siva 71, chengam, tiruvannamalai jgfutfvugyubuybuybyuvuy hybyuuyvuyvyuvyu uyvyuvuvuvuvivuyv.</Radio>
                          <Link to={'/'} style={{fontSize:"small", marginLeft:"3%", color:"#319795",fontWeight:"bold"}}>Edit Address</Link>
                          <Radio value='2'>Siva 71, chengam, tiruvannamalai.</Radio>
                          <Link to={'/'} style={{fontSize:"small", marginLeft:"3%", color:"#319795",fontWeight:"bold"}}>Edit Address</Link>
                        </VStack>
                      </RadioGroup>
                      <VStack direction='row' display={"grid"} ml="5%" mt="2%">
                        <Link to={"#"} onClick={onOpen} style={{fontSize:"smaller", marginLeft:"3%", color:"#319795", fontWeight:"bold"}}>Add New Address</Link>
                      </VStack>
                    </Box>
                    <Modal isOpen={isOpen} onClose={onClose} >
                        <ModalOverlay />
                        <ModalContent maxW="40%">
                          <ModalHeader>Enter a new delivery address</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody pb={6}>
                            <form>
                              <FormControl>
                                <FormLabel>Country/Region</FormLabel>
                                <Select><option value='option1' defaultIndex={[0]}>India</option></Select>
                              </FormControl>
                              <FormControl mt={4}>
                                <FormLabel>Full name (First and Last name)</FormLabel>
                                <Input type="text" placeholder='Full Name' />
                              </FormControl>

                              <FormControl mt={4}>
                                <FormLabel>Mobile number</FormLabel>
                                <Input type="number" placeholder='Mobile Number' />
                              </FormControl>
                              <FormControl mt={4}>
                                <FormLabel>Pin code</FormLabel>
                                <Input type="number" placeholder='6 Digit Pin code' />
                              </FormControl>
                              <FormControl mt={4}>
                                <FormLabel>Flat, House no., Building, Company, Apartment</FormLabel>
                                <Input type="text" />
                              </FormControl>
                              <FormControl mt={4}>
                                <FormLabel>LandMark</FormLabel>
                                <Input type="text" placeholder='E.g. near apollo hospital' />
                              </FormControl>
                              <FormControl mt={4}>
                                <HStack>
                                <Box><FormLabel>Town/City</FormLabel>
                                    <Input type="text" />
                                </Box>
                                <Box w="45%">
                                <FormLabel>State</FormLabel>
                                <Select><option value='option1' defaultIndex={[0]}>TamilNadu</option></Select>
                                </Box>
                                </HStack>
                    
                              </FormControl>
                              <FormControl mt={4}>
                                <Checkbox>Make this my default address</Checkbox>
                              </FormControl>
                              <FormControl mt={4}>
                                <Button mr={3} bgColor='#3182ce' color={"#fff"}>Use this address</Button>
                                <Button onClick={onClose} >Cancel</Button>
                              </FormControl>
                            </form>
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                  </Stack>
                </CardBody>
                <CardFooter p="15px" borderTop={"2px solid lightgray"}>
                  <Button mr={3} bgColor='#ffd814'borderColor='#fcd200' color={"black"} fontSize={"14px"} p="15px" ml="5%">Use this address</Button>
                </CardFooter>
              </Card>
            </AccordionPanel>
          </AccordionItem>
          
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box as='span' flex='1' textAlign='left'>
                Payment Method
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Card size={"sm"} borderRadius={"20px"}>
                <CardBody>
                  <Stack>
                  <RadioGroup onChange={setValue} value={value}>
                        <VStack direction='row' display={"grid"} ml="5%">
                        <FormControl>
                          <Radio value='1'>Credit or debit card</Radio>
                          <HStack gap={"15px"} p={"0px 20px"} mt="10px">
                              <Image boxSize={"35px"} src={paypal} borderRadius={"10px"} />
                              <Image boxSize={"35px"} src={visa} borderRadius={"10px"} />
                              <Image boxSize={"35px"} src={mastercard} borderRadius={"10px"} />
                              <Image boxSize={"35px"} src={AmericanExpress} borderRadius={"10px"} />
                          </HStack>
                        </FormControl>
                        <FormControl mt={4}>
                          <Radio value='2'>Net Banking</Radio>
                          <HStack gap={"15px"} p={"0px 20px"} mt="10px" w="30%">
                          <Select placeholder="Choose an Option"><option value='option1' defaultIndex={[0]}>SBI</option></Select>
                          </HStack>
                        </FormControl>
                        <FormControl mt={4}>
                          <Radio value='3'>UPI Apps</Radio>
                        </FormControl>
                        <FormControl mt={4}>
                          <Radio value='4'>EMI</Radio>
                        </FormControl>
                        <FormControl mt={4}>
                          <Radio value='4'>Cash on Delivery</Radio>
                        </FormControl>
  
                        </VStack>
                    </RadioGroup>
                  </Stack>
                </CardBody>
                <CardFooter p="15px" borderTop={"2px solid lightgray"} mt="15px">
                  <Button mr={3} bgColor='#ffd814'borderColor='#fcd200' color={"black"} fontSize={"14px"} p="15px" ml="5%">Use this Payment Method</Button>
                </CardFooter>
              </Card>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box as='span' flex='1' textAlign='left'>
                Apply Coupon Code
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Card size={"sm"} borderRadius={"20px"}>
              <CardBody>
                <HStack gap={5}>
                  <Input placeholder="Enter Coupon Code" variant="filled" _focus={{ boxShadow: "none" }} w="40%" />
                  <Button mr={3} bgColor='#ffd814'borderColor='#fcd200' color={"black"} fontSize={"14px"} p="15px" w="25%" ml="-10px" >Apply Your Coupon</Button>
                </HStack>
              </CardBody>
              </Card>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box as='span' flex='1' textAlign='left'>
                Offers
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Card size={"sm"} borderRadius={"20px"}>
              <CardBody>
                <HStack gap={5} justifyContent={"center"}>
                  <Card>
                    <CardBody>
                    <Text>50% Offers<br/>HDFC bank</Text>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                    <Text>50% Offers<br/>HDFC bank</Text>
                    </CardBody>
                  </Card>
                </HStack>
              </CardBody>
              </Card>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box as='span' flex='1' textAlign='left'>
                Items and Delivery
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Card size={"sm"} borderRadius={"20px"}>
              <CardBody>
                <VStack gap={5}>
                  <Card>
                    <CardHeader>Delivey Date: 4 july</CardHeader>
                    <CardBody>
                        <HStack>
                          <Box mt="10px"><img src={"https://localhost-44v9.onrender.com/images/"} alt="product_img" />
                         
                          </Box>
                          <Text>nljdnvsnkfdnvldfjvkfkvnksbvdanivsufnvak jfkjvkjldfnasjdn kjdanvljsfnkvjnfkasjn</Text>
                        </HStack>
                    </CardBody>
                  </Card>

                  <Card mt='10px'>
                    <CardHeader>Delivey Date: 4 july</CardHeader>
                    <CardBody>
                        <HStack>
                          <Box mt="10px"><img src={"https://localhost-44v9.onrender.com/images/"} alt="product_img" />
                         
                          </Box>
                          <Text>nljdnvsnkfdnvldfjvkfkvnksbvdanivsufnvak jfkjvkjldfnasjdn kjdanvljsfnkvjnfkasjn</Text>
                        </HStack>
                    </CardBody>
                  </Card>
                </VStack>
                
              </CardBody>
              <CardFooter p="15px" borderTop={"2px solid lightgray"} mt="15px" justifyContent={"center"}>
                <Button colorScheme="blue" fontSize={"14px"} p="15px" ml="5%" w="25%" onClick={()=>navigate('/stepper')}>Place Your Order</Button>
              </CardFooter>
              </Card>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
        </Box>
        <Box w="30%">
            <Card size={"sm"} borderRadius={"20px"}>
              <CardHeader>
                <Heading size="md">Order Summary</Heading>
              </CardHeader>
              <Divider borderColor="gray.300" opacity="0.5" />
              <CardBody>
                <VStack align="stretch" >
                  <HStack  justifyContent="space-between">
                    <Text  fontSize='md' textColor={"#989ca1"} >Discount</Text>
                    <Text  fontSize='sm' fontWeight="600">₹00.00</Text>
                  </HStack>
                  <HStack  justifyContent="space-between">
                    <Text  fontSize='md' textColor={"#989ca1"}>Delivery</Text>
                    <Text  fontSize='sm' fontWeight="600">₹29.99</Text>
                  </HStack>
                  <HStack  justifyContent="space-between">
                    <Text  fontSize='md' textColor={"#989ca1"}>Tax</Text>
                    <Text  fontSize='sm' fontWeight="600">₹39.99</Text>
                  </HStack>
                  <HStack  justifyContent="space-between">
                    <Text  fontSize='md' textColor={"#989ca1"}>Total</Text>
                    <Text  fontSize='lg' fontWeight="700" >Total function</Text>
                  </HStack>
                </VStack>
              </CardBody>
              <CardFooter>
                <Button w={"100%"} colorScheme="blue" onClick={()=>navigate('/stepper')}>Place Your Order</Button>
              </CardFooter>
            </Card>  
          </Box>
      </HStack>
        </Box>
      </Box>
    </>)
}

export default StepperModule;