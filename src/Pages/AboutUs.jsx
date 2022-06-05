import React from 'react';
import Footbar from '../Components/Footbar';
import Navbar from '../Components/Navbar';
import {Flex, Box, Text, Heading, Image} from "@chakra-ui/react"
import styles from "./Pages.module.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <Box w="60%" m="auto" mt="30px" mb="100px">
          <Text fontWeight={600} fontSize="4xl">About Us</Text>
          <Box textAlign="center" className={styles.abdiv1}>
            <Heading fontWeight={600} size="md">We Create Thoughtful Products That Are Worth Holding Onto.</Heading>
            <p className={styles.para}>The products we use on a daily basis say something about the people we are. We believe many things in life get better with time; it is that spirit we try to infuse in everything we create. In a world where we are overwhelmed by products made to break down, wear out or go out style, we aim to go against that grain.</p>
          </Box>

          <Flex mt="70px">
            <Box w="50%" p="0px 40px" textAlign="center">
              <Heading lineHeight="35px"  fontWeight={600} size="md" mt="20px">We Focus on Value, Durability, and a Timeless Aesthetic.</Heading>
              <p className={styles.para}>Our goods are based in value-driven design and quality manufacturing. All of us make a statement every time we buy something. We vote with our wallets. It’s our belief that value is more than just saving a few bucks - true value lies at the intersection of something made well for a fair price, created in way that supports those who made it.</p>
              <Heading lineHeight="35px"  fontWeight={600} size="md" mt="50px">Objects In Our Lives Are Part Of Who We Are.</Heading>
              <p className={styles.para}>No two people are the same, just like no two wallets or bags look the same over time. Each carries a unique story that is a reflection of our individual lifestyle. When a product improves and patinas with use, it carries the history of its user, of places traveled and memories made.</p>
            </Box>
            <Box w="50%">
              <Image src="https://i.shgcdn.com/100c3286-40e8-410e-bac4-522247fff055/-/format/auto/-/preview/3000x3000/-/quality/lighter/"/>
            </Box>
      </Flex>

          <Flex mt="70px">
            <Box w="50%">
              <Image src="https://i.shgcdn.com/da6a9240-e569-477f-8427-e2eb3c7330fe/-/format/auto/-/preview/3000x3000/-/quality/lighter/"/>
            </Box>
            <Box w="50%" p="0px 40px" textAlign="center">
              <Heading  fontWeight={600} size="md" mt="10px" lineHeight="40px">Our Most Valuable Assets Are The Relationships We’ve Built.</Heading>
              <p className={styles.para}>We surround ourselves with incredibly talented, driven creatives that help us bring our products to life. This creative energy reverberates internally, building in amplitude and challenging each of us to do better, to think bigger and allow our own personal potential to flourish.</p>
              <Heading  lineHeight="40px"  fontWeight={600} size="md" mt="50px">We Are All Products Of Our Environment. Let’s Cultivate The Best One We Can.</Heading>
              <p className={styles.para}>Our company, in many ways, is defined the community we belong to. We are Oregonians through and through. We believe in equality for all. We believe in putting others first. We are a progressive company that echos the values and ideals of our own community in Portland and the greater Northwest.</p>
            </Box>
      </Flex>
      </Box>
      <Footbar />
    </div>
  )
}

export default AboutUs