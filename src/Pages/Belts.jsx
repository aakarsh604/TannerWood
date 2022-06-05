import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import BeltComp from '../Components/BeltComp';
import Footbar from '../Components/Footbar';
import Navbar from '../Components/Navbar';
import styles from "./Pages.module.css"

const Belts = () => {

    const [belts, setbelts] = useState([]);
    const type = "Belts";

    useEffect(()=> {
      const getData = () => {
        fetch("http://localhost:8080/Belts").then(r=>r.json()).then(d=>setbelts(d));
      }
      getData();
    }, [] );

  return (
    <div>
        <Navbar/>
          <Box w="80%" m="auto" mt="50px" mb="30px">
          <Text fontWeight={600} fontSize="4xl">Belts</Text>
          </Box>
          <Box p="20px 100px" className={styles.beltgrid}>
            {belts.map(item=>(
              <BeltComp key={item.id} item={item} type={type}/>
            ))}
         </Box>
        <Footbar/>
    </div>
  )
}

export default Belts