import React from "react";
import {
    Box,
    Card,
    CardHeader,
    CardFooter,
    Heading,
    CardBody,
    Stack,
    Input,
    Button,
    Text,
    GridItem,
    Grid,
    Divider,
    HStack,
    VStack,
    Image,
    IconButton,
    Flex,
    Hide,
    Show
  } from "@chakra-ui/react";
  import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import { Link,useNavigate  } from 'react-router-dom';



const StepperModule = ()=>{
  const navigate = useNavigate();

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
        <Box  bg="#e1ffea" >
            <Grid 
            templateColumns='repeat(3, 1fr)'
            templateRows='repeat(1, 1fr)'
            gap={10}
            margin="20px 57px"
            >
                <GridItem h="700px"  colStart={1} colEnd={3} >
                
                 {/* <Card  borderRadius={"20px"}>
                    <CardHeader>
                    <Stepper size='lg' index={activeStep} >
                    {steps.map((step, index) => (
                      <Step key={index}>
                        <StepIndicator>
                          <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                          />
                        </StepIndicator>

                        <Box flexShrink='0'>
                          <StepTitle>{step.title}</StepTitle>
                          <StepDescription>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                      </Step>
                    ))}
                   </Stepper>
                    </CardHeader>
                    <Divider borderColor="gray.300" opacity="0.5" />
                    <CardBody>
                      <VStack >
                        <HStack  w="100%" gap={20}>
                        <Input variant='filled' placeholder='Name' />
                        <Input variant='filled' placeholder='10-digits mobile number' />
                        </HStack>
                        <HStack  w="100%" gap={20}>
                        <Input variant='filled' placeholder='PIN Code' />
                        <Input variant='filled' placeholder='Locality' />
                        </HStack>
                        <Textarea placeholder='Here is a sample placeholder' size="sm"/>
                        <HStack  w="100%" gap={20}>
                        <Input variant='filled' placeholder='city/Dist/Town' />
                        <Input variant='filled' placeholder='Select State' />
                        </HStack>
                        <HStack  w="100%" gap={20}>
                        <Input variant='filled' placeholder='Land Mark' />
                        <Input variant='filled' placeholder='Alternate Phone number' />
                        </HStack>
                      </VStack>
                    </CardBody>
                    <CardFooter>
                    <HStack>
                      <Button onClick={handleBack}>Back</Button>
                      <Button onClick={handleNext}>Continue</Button>
                    </HStack>
                    </CardFooter>
                  </Card> */}
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem mb={4}>
                      <h2>
                        <AccordionButton  >
                          <Box as='span' flex='1' textAlign='left'>
                           Delivery Address
                          </Box>
                          <Button>Change</Button>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left'>
                            Payment Options
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                              
                              </GridItem>
                              <GridItem  >
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
                                        <Text  fontSize='lg' fontWeight="700" >₹0.00</Text>
                                      </HStack>
                                    </VStack>
                                  </CardBody>
                                  <CardFooter>
                                  
                                  </CardFooter>
                                </Card>
                              </GridItem>
                              


                          </Grid>
                      </Box>
                      </>)
}

export default StepperModule;