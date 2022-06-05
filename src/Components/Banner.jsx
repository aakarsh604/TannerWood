import React, { useEffect, useState } from 'react'
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import '../App.css';
import styles from "../Components/Component.module.css";
import Card from "./Card"

const Banner = () => {

  const [data, setdata] = useState([]);

  useEffect(()=> {
    const getData = () => {
      fetch("http://localhost:8080/Trendings").then(r=>r.json()).then(d=>setdata(d));
    }
    getData();
  }, [] );

  return (
    <div>
      <Box className="imagebox" mt="30px">
           <Image className="images" overflow="hidden" src="https://boundaryoutlet.com/wp-content/uploads/2019/09/Departments5-1.jpg"/>
      </Box>
      <Box className={styles.sale}>
            <Text>UP TO 60% OFF</Text>
            <Text>Final Sale Collection</Text>
      </Box>
      <Text className={styles.trend}>Trending Right Now</Text>
      <Flex p="20px 40px">
            {data.map(item=>(
              <Card key={item.name}  item={item}/>
            ))}
      </Flex>
    </div>
  )
}

export default Banner;

