import React, { useEffect, useState } from 'react'
import Footbar from '../Components/Footbar'
import Navbar from '../Components/Navbar'
import {Flex, Box, Image, Text, Button} from "@chakra-ui/react"
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {type,id} = useParams();
  console.log('type:', type)
  console.log('id:', id)

  const [info, setinfo] = useState([]);

  useEffect(()=> {
    const getData = () => {
      fetch(`http://localhost:8080/${type}/${id}`).then(r=>r.json()).then(d=>setinfo(d));
    }
    getData();
  }, [] );

  return (
    <div>
        <Navbar/>
        <Flex h="500px" w="70%" m="auto" mt="50px">
            <Box><Image h="100%" src={info.url}/></Box>
            <Box p="50px 50px"> 
              <Text fontSize="sm" letterSpacing="4px">{info.brand}</Text>
              <Text fontSize="4xl" fontWeight={600}>{info.name}</Text>
              <Flex gap="25px" mt="50px">
                  <Text fontSize="lg" fontWeight={600} style={{textDecoration: "line-through"}}>{`₹ ${info.price+2500}/-`}</Text>
                  <Text fontSize="lg" fontWeight={600}>{`₹ ${info.price}/-`}</Text>
                  <Text fontSize="lg" color="yellow.500" fontWeight={600}>{`Save ${2500/100}%`}</Text>
              </Flex>
              <p style={{fontSize: "14px"}}>Shipping calculated at checkout.</p>
             <Flex direction="column" w="130%">
             <Button mt="50px" colorScheme="yellow">ADD TO CART</Button>
              <Button mt="30px" colorScheme="teal">BUY IT NOW</Button>
             </Flex>
            </Box>
        </Flex>
        <Footbar/>
    </div>
  )
}

export default ProductDetails