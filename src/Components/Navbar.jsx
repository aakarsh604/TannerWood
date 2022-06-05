import React from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Flex, Spacer, Box} from "@chakra-ui/react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
      <Flex justify="center" align="center" height="70px" p="40px 60px 0px 60px">
        <Box>
          <img src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052" alt=""/>
        </Box>
        <Spacer/>
        <Flex gap="25px"> 
              <Box fontSize="sm" fontWeight="bold" cursor="pointer" _hover={{color: "maroon"}}>Tanner Goods</Box>
              <Box fontSize="sm" fontWeight="bold" cursor="pointer" _hover={{color: "maroon"}}>Mazama Wares</Box>
              <Box fontSize="sm" fontWeight="bold" cursor="pointer" _hover={{color: "maroon"}}>
              <Menu>
                    <MenuButton fontWeight="bold" _hover={{color: "maroon"}}>
                      Featured List
                    </MenuButton>
                    <MenuList>
                      <MenuItem color="black" _hover={{color: "black"}}>Best sellers</MenuItem>
                      <MenuItem color="black" _hover={{color: "black"}}>New Arrivals</MenuItem>
                      <MenuItem color="black" _hover={{color: "black"}}>Everyday Carry</MenuItem>
                      <MenuItem color="black" _hover={{color: "black"}}>Sumer Accessories</MenuItem>
                    </MenuList>
                  </Menu>
              </Box>  
              <Box fontSize="sm" fontWeight="bold" cursor="pointer" _hover={{color: "maroon"}}>Fathers's Day Shop</Box>
              <Box fontSize="sm" fontWeight="bold" cursor="pointer" _hover={{color: "maroon"}}>Final Sale</Box>
        </Flex>
        <Spacer/>
        <Flex gap="20px">
          <PersonOutlineOutlinedIcon sx={{ fontSize: 30 }}/>
          <SearchOutlinedIcon sx={{ fontSize: 30 }}/>
          <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }}/>
        </Flex>
      </Flex>
    </div>
  )
}

export default Navbar