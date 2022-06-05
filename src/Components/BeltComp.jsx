import React from 'react';
import {Flex, Image, Text} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


const BeltComp = ({item, type}) => {

  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/${type}/${id}`)
  }
  return (
        <Flex direction="column" p="0px 15px" align="center" cursor="pointer" onClick={()=>{handleOnClick(item.id)}}>
            <Image src={`${item.url}`} />
            <Text fontWeight={600}>{item.name}</Text>
            <Text fontSize="sm" letterSpacing="2px" color="gray">{item.brand}</Text>
            <Text color="blue.800">{`₹ ${item.price}/-`}</Text>
        </Flex>
  )
}

export default BeltComp