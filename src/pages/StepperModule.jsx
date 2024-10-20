import React from "react";
import axios from "axios";
import {
  Box,
  Card,
  Select,
  Checkbox,
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState,useEffect,useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import paypal from "../Components/Assets/paypal.png";
import visa from "../Components/Assets/visa.png";
import mastercard from "../Components/Assets/mastercard.png";
import AmericanExpress from "../Components/Assets/American_Express_logo.png";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import {setUserData,setclose,setStatus,setEditUserData} from "../redux/StepperReducer";
import {fetchCountry,fetchState,fetchUserAddress,fetchAddress} from "../redux/actions/addressActions";
import { useToast } from '@chakra-ui/react';
import { BiLoaderCircle } from "react-icons/bi";




const StepperModule = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.address?.userData);
  const country = useSelector((state)=> state?.address?.countrys);
  const states = useSelector((state)=> state?.address?.states);
  const status = useSelector((state)=> state?.address?.status);
  const [isEdit,setIsEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState("1");
  const [userAddressId,setUserAddressId] = useState(null);
  const toast = useToast();
  const steps = [
    { title: "Delevery Address", description: "select Address" },
    { title: "Payment", description: "Select Payment Option" },
  ];
  const addressData = useSelector((state)=>state.address.addressData);
  const userDetails = localStorage.getItem("user");
  const handleChange = (e)=>{
    const {name,value} = e.target;
    dispatch(setUserData({ field: name, value })); 
  }

  const formSubmit = async (e) => {
      e.preventDefault();
     try {

          let data;
          let response;
          if(userDetails)
          {
            const id = JSON.parse(userDetails)._id;
            data = {...userData,userId:id};
          }
            dispatch(setStatus("loading"));
            if(isEdit){
              response = await axios.put(`https://localhost-44v9.onrender.com/address/update-address/${userAddressId}`, data);
              if(response?.data?.status === "Success"){
                toast({
                    title: 'Address Updated successful! 🎉',
                    status: 'success',
                    duration: 5000,
                    position:'top-right',
                    top:'30px !important',
                    isClosable: true,
                    variant: 'solid',
                  }); 
              }
                setIsEdit((prev)=> prev = false);
            }else{
            response = await axios.post('https://localhost-44v9.onrender.com/address/add-address', data);
            if(response?.data?.status === "Success"){
                toast({
                    title: 'Address Saved successful! 🎉',
                    status: 'success',
                    duration: 5000,
                    position:'top-right',
                    top:'30px !important',
                    isClosable: true,
                    variant: 'solid',
                  });
               
            }

            }
            dispatch(setStatus("succeeded"));
            handleClose();
            fetchAddressByUserId();
        }catch (error) {
            if (error.response && error.response.status === 400) {
                toast({
                    title: error.response.data.message,
                    status: 'error',
                    duration: 5000,
                    position:'top-right',
                    top:'30px !important',
                    isClosable: true,
                    variant: 'solid',
                  })
                dispatch(setStatus("error"));     
            } else {
                console.log(error);
                toast({
                    title: 'failed. Please try again.',
                    status: 'error',
                    duration: 5000,
                    position:'top-right',
                    top:'30px !important',
                    isClosable: true,
                    variant: 'solid',
                  })
                dispatch(setStatus("error"));     

            }
            
        }
  }
  const handleClose = () =>{
    dispatch(setclose());
    onClose();
    setIsEdit((prev)=> prev = false);
    setUserAddressId((prev)=>prev = null);

  }
  const handleModelOpen = (addressId) =>{
    setUserAddressId((prev)=>prev = addressId);
    const useraddress = addressData?.find((data)=> data._id === addressId);
    let {name,phone} = JSON.parse(userDetails);
    if(useraddress && name && phone)
    {
      const {address,cityTown,countryId:{countryName,_id:_countryId},landmark,pincode,stateId:{stateName,_id:_stateId},_id} = useraddress;
      const modelData = {
        name:name,
        phone:phone,
        address:address,
        pincode:pincode,
        landmark:landmark,
        cityTown:cityTown,
        stateId:_stateId,
        countryId:_countryId
        }
        dispatch(setEditUserData(modelData));
    }

    onOpen();
    setIsEdit((prev)=> prev = true);
  }

  const fetchAddressByUserId = ()=>{

    if(userDetails)
      {
       const id = JSON.parse(userDetails)._id;
       dispatch(fetchUserAddress(id));
     }

  }


  const limitStatus = () =>{

              toast({
                    title: 'Only five address are available..!',
                    status: 'info',
                    duration: 5000,
                    position:'top-right',
                    top:'30px !important',
                    isClosable: true,
                    variant: 'solid',
                  });
  
  }
  
  useEffect(()=>{
    dispatch(fetchCountry());
    dispatch(fetchState());
    fetchAddressByUserId();
    
  },[]);
  return (
    <>
      <Box
        m={{
          base: "0px 0px",
          md: "5px 10px",
          lg: "10px 50px",
          xl: "10px 50px",
        }}
        bgGradient="linear-gradient(180deg, #ecf4ff, #e1ffea 70%)"
      >
        <Box
          minH={"400px"}
          gap={8}
          p={{ base: "0px", md: "25px", lg: "25px", xl: "25px" }}
        >
          <HStack alignItems="">
            <Box w="70%">
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "tomato", color: "white" }}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Select a delivery address
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Card size={"sm"} borderRadius={"20px"}>
                      <CardBody>
                        <Stack>
                          <Text padding={"10px"} fontWeight={"bold"}>
                            Your addresses
                          </Text>
                          <Box>
                            {addressData?.map((data)=>(
                               <RadioGroup onChange={setValue} value={value}>
                               <VStack direction="row" display={"grid"} ml="5%">
                                 <Radio value="">
                                   {data.address}
                                 </Radio>
                                 <Link
                                   to={"#"}
                                   onClick={(e) => handleModelOpen(data._id)}
                                   style={{
                                     fontSize: "small",
                                     marginLeft: "3%",
                                     color: "#319795",
                                     fontWeight: "bold",
                                   }}
                                 >
                                   Edit Address
                                 </Link>
                               </VStack>
                             </RadioGroup>
                            ))}
                           
                            <VStack
                              direction="row"
                              display={"grid"}
                              ml="5%"
                              mt="2%"
                            >
                              <Link
                                to={"#"}
                                onClick={addressData.length > 4 ? limitStatus() : onOpen}
                                style={{
                                  fontSize: "smaller",
                                  marginLeft: "3%",
                                  color: "#319795",
                                  fontWeight: "bold",
                                }}
                              >
                                Add New Address
                              </Link>
                            </VStack>
                          </Box>
                          <Modal isOpen={isOpen} onClose={handleClose}>
                            <ModalOverlay />
                            <ModalContent maxW="40%">
                              <ModalHeader>
                                {isEdit ? "Update delivery address":"Enter a new delivery address"}
                              </ModalHeader>
                              <ModalCloseButton />
                              <ModalBody pb={6}>
                                <form onSubmit={formSubmit}>
                                  <FormControl>
                                    <FormLabel>Country/Region</FormLabel>
                                    <Select  
                                        name="countryId"
                                        value = {userData.countryId} 
                                        onChange={(e)=>handleChange(e)}
                                        placeholder = "Please Select Country"
                                        required
                                      >
                                      {country?.map((data)=>(
                                           <option value={data._id}>
                                            {data.name}
                                          </option>
                                          ))}
                                    </Select>
                                  </FormControl>
                                  <FormControl mt={4}>
                                    <FormLabel>
                                      Full name (First and Last name)
                                    </FormLabel>
                                    <Input
                                      type="text"
                                      placeholder="Full Name"
                                      name="name"
                                      onChange={handleChange}
                                      required
                                    />
                                  </FormControl>
                                  <FormControl mt={4}>
                                    <FormLabel>Mobile number</FormLabel>
                                    <Input
                                      type="number"
                                      placeholder="Mobile Number"
                                      name="phone"
                                      onChange={handleChange}
                                      value={userData.phone}
                                      required
                                    />
                                  </FormControl>
                                  <FormControl mt={4}>
                                    <FormLabel>Pin code</FormLabel>
                                    <Input
                                      type="number"
                                      placeholder="6 Digit Pin code"
                                      name="pincode"
                                      onChange={handleChange}
                                      value={userData.pincode}
                                      required
                                    />
                                  </FormControl>
                                  <FormControl mt={4}>
                                    <FormLabel>
                                      Flat, House no., Building, Company,
                                      Apartment
                                    </FormLabel>
                                    <Input type="text" name="address"  
                                      onChange={handleChange}
                                      value={userData.address}
                                      required
                                    />
                                  </FormControl>
                                  <FormControl mt={4}>
                                    <FormLabel>LandMark</FormLabel>
                                    <Input
                                      type="text"
                                      placeholder="E.g. near apollo hospital"
                                      name="landmark"
                                      onChange={handleChange}
                                      value={userData.landmark}
                                      required
                                    />
                                  </FormControl>
                                  <FormControl mt={4}>
                                    <HStack>
                                    <VStack>
                                      <Box>
                                        <FormLabel>Town/City</FormLabel>
                                        <Input 
                                        type="text" 
                                        name="cityTown"
                                        onChange={handleChange}
                                        value={userData.cityTown}
                                        required
                                        />
                                      </Box>
                                    </VStack>
                                    <VStack>
                                      <Box>
                                        <FormLabel>State</FormLabel>
                                        <Select
                                            name="stateId"
                                            value={userData.stateId}
                                            onChange={(e)=>handleChange(e)} 
                                            size="md"
                                            placeholder="Please Select State"
                                            required
                                        >
                                         {states?.map((data)=>(
                                           <option value={data._id}>
                                            {data.name}
                                          </option>
                                          ))}
                                        </Select>
                                      </Box>
                                    </VStack>
                                    </HStack>
                                  </FormControl>
                                  <FormControl mt={4}>
                                    <Checkbox>
                                      Make this my default address
                                    </Checkbox>
                                  </FormControl>
                                  <FormControl mt={4}>
                                    {isEdit ? (

                                      <Button
                                      mr={3}
                                      bgColor="#3182ce"
                                      color={"#fff"}
                                      type="submit"
                                      disabled={status === "loading"}
                                      _hover={{bg:"#076f15"}} 
                                    >
                                    {status === "loading" ? <center><BiLoaderCircle className="spinner" /></center> : 'Update Address'}

                                    </Button>
                                      ): (

                                      <Button
                                      mr={3}
                                      bgColor="#3182ce"
                                      color={"#fff"}
                                      type="submit"
                                      disabled={status === "loading"}
                                      _hover={{bg:"#076f15"}} 
                                    >
                                    {status === "loading" ? <center><BiLoaderCircle className="spinner" /></center> : 'Add Address'}

                                    </Button>
                                      )}
                                    <Button onClick={handleClose} disable={status === "loading"}>Cancel</Button>
                                  </FormControl>
                                </form>
                              </ModalBody>
                            </ModalContent>
                          </Modal>
                        </Stack>
                      </CardBody>
                      <CardFooter p="15px" borderTop={"2px solid lightgray"}>
                        <Button
                          mr={3}
                          bgColor="#ffd814"
                          borderColor="#fcd200"
                          color={"black"}
                          fontSize={"14px"}
                          p="15px"
                          ml="5%"
                        >
                        use this Address
                        </Button>
                      </CardFooter>
                    </Card>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "tomato", color: "white" }}
                    >
                      <Box as="span" flex="1" textAlign="left">
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
                            <VStack direction="row" display={"grid"} ml="5%">
                              <FormControl>
                                <Radio value="1">Credit or debit card</Radio>
                                <HStack gap={"15px"} p={"0px 20px"} mt="10px">
                                  <Image
                                    boxSize={"35px"}
                                    src={paypal}
                                    borderRadius={"10px"}
                                  />
                                  <Image
                                    boxSize={"35px"}
                                    src={visa}
                                    borderRadius={"10px"}
                                  />
                                  <Image
                                    boxSize={"35px"}
                                    src={mastercard}
                                    borderRadius={"10px"}
                                  />
                                  <Image
                                    boxSize={"35px"}
                                    src={AmericanExpress}
                                    borderRadius={"10px"}
                                  />
                                </HStack>
                              </FormControl>
                              <FormControl mt={4}>
                                <Radio value="2">Net Banking</Radio>
                                <HStack
                                  gap={"15px"}
                                  p={"0px 20px"}
                                  mt="10px"
                                  w="30%"
                                >
                                  <Select placeholder="Choose an Option">
                                    <option value="option1" defaultIndex={[0]}>
                                      SBI
                                    </option>
                                  </Select>
                                </HStack>
                              </FormControl>
                              <FormControl mt={4}>
                                <Radio value="3">UPI Apps</Radio>
                              </FormControl>
                              <FormControl mt={4}>
                                <Radio value="4">EMI</Radio>
                              </FormControl>
                              <FormControl mt={4}>
                                <Radio value="4">Cash on Delivery</Radio>
                              </FormControl>
                            </VStack>
                          </RadioGroup>
                        </Stack>
                      </CardBody>
                      <CardFooter
                        p="15px"
                        borderTop={"2px solid lightgray"}
                        mt="15px"
                      >
                        <Button
                          mr={3}
                          bgColor="#ffd814"
                          borderColor="#fcd200"
                          color={"black"}
                          fontSize={"14px"}
                          p="15px"
                          ml="5%"
                        >
                          Use this Payment Method
                        </Button>
                      </CardFooter>
                    </Card>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "tomato", color: "white" }}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Apply Coupon Code
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Card size={"sm"} borderRadius={"20px"}>
                      <CardBody>
                        <HStack gap={5}>
                          <Input
                            placeholder="Enter Coupon Code"
                            variant="filled"
                            _focus={{ boxShadow: "none" }}
                            w="40%"
                          />
                          <Button
                            mr={3}
                            bgColor="#ffd814"
                            borderColor="#fcd200"
                            color={"black"}
                            fontSize={"14px"}
                            p="15px"
                            w="25%"
                            ml="-10px"
                          >
                            Apply Your Coupon
                          </Button>
                        </HStack>
                      </CardBody>
                    </Card>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "tomato", color: "white" }}
                    >
                      <Box as="span" flex="1" textAlign="left">
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
                              <Text>
                                50% Offers
                                <br />
                                HDFC bank
                              </Text>
                            </CardBody>
                          </Card>
                          <Card>
                            <CardBody>
                              <Text>
                                50% Offers
                                <br />
                                HDFC bank
                              </Text>
                            </CardBody>
                          </Card>
                        </HStack>
                      </CardBody>
                    </Card>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "tomato", color: "white" }}
                    >
                      <Box as="span" flex="1" textAlign="left">
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
                                <Box mt="10px">
                                  <img
                                    src={
                                      "https://localhost-44v9.onrender.com/images/"
                                    }
                                    alt="product_img"
                                  />
                                </Box>
                                <Text>
                                  nljdnvsnkfdnvldfjvkfkvnksbvdanivsufnvak
                                  jfkjvkjldfnasjdn kjdanvljsfnkvjnfkasjn
                                </Text>
                              </HStack>
                            </CardBody>
                          </Card>

                          <Card mt="10px">
                            <CardHeader>Delivey Date: 4 july</CardHeader>
                            <CardBody>
                              <HStack>
                                <Box mt="10px">
                                  <img
                                    src={
                                      "https://localhost-44v9.onrender.com/images/"
                                    }
                                    alt="product_img"
                                  />
                                </Box>
                                <Text>
                                  nljdnvsnkfdnvldfjvkfkvnksbvdanivsufnvak
                                  jfkjvkjldfnasjdn kjdanvljsfnkvjnfkasjn
                                </Text>
                              </HStack>
                            </CardBody>
                          </Card>
                        </VStack>
                      </CardBody>
                      <CardFooter
                        p="15px"
                        borderTop={"2px solid lightgray"}
                        mt="15px"
                        justifyContent={"center"}
                      >
                        <Button
                          colorScheme="blue"
                          fontSize={"14px"}
                          p="15px"
                          ml="5%"
                          w="25%"
                          onClick={() => navigate("/stepper")}
                        >
                          Place Your Order
                        </Button>
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
                  <VStack align="stretch">
                    <HStack justifyContent="space-between">
                      <Text fontSize="md" textColor={"#989ca1"}>
                        Discount
                      </Text>
                      <Text fontSize="sm" fontWeight="600">
                        ₹00.00
                      </Text>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text fontSize="md" textColor={"#989ca1"}>
                        Delivery
                      </Text>
                      <Text fontSize="sm" fontWeight="600">
                        ₹29.99
                      </Text>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text fontSize="md" textColor={"#989ca1"}>
                        Tax
                      </Text>
                      <Text fontSize="sm" fontWeight="600">
                        ₹39.99
                      </Text>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text fontSize="md" textColor={"#989ca1"}>
                        Total
                      </Text>
                      <Text fontSize="lg" fontWeight="700">
                        Total function
                      </Text>
                    </HStack>
                  </VStack>
                </CardBody>
                <CardFooter>
                  <Button
                    w={"100%"}
                    colorScheme="blue"
                    onClick={() => navigate("/stepper")}
                  >
                    Place Your Order
                  </Button>
                </CardFooter>
              </Card>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default StepperModule;
