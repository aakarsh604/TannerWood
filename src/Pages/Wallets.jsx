import { Box, Text, Flex, StylesProvider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import BeltComp from '../Components/BeltComp';
import Footbar from '../Components/Footbar';
import Navbar from '../Components/Navbar';
import styles from "./Pages.module.css"

const Wallets = () => {

    const [wallets, setwallets] = useState([]);
    const type = "Wallets";

    useEffect(()=> {
      const getData = () => {
        fetch("http://localhost:8080/Wallets").then(r=>r.json()).then(d=>setwallets(d));
      }
      getData();
    }, [] );

  return (
    <div>
        <Navbar/>
          <Box w="80%" m="auto" mt="50px" mb="30px">
          <Text fontWeight={600} fontSize="4xl">Wallets</Text>
          </Box>
          <Box p="20px 100px" className={styles.beltgrid}>
            {wallets.map(item=>(
              <BeltComp key={item.id} item={item} type={type}/>
            ))}
         </Box>
        <Footbar/>
    </div>
  )
}

export default Wallets