import React from 'react'
import {Box, Heading, Textarea, Button } from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react'
import styles from "./Pages.module.css"
import Navbar from '../Components/Navbar'
import Footbar from '../Components/Footbar'

const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <Box className={styles.contactbg}>
      </Box>

      <Box className={styles.conbox}>
            <Heading fontSize="3xl">Contact Our Customer Service Team</Heading>
            <FormControl isRequired>
                <FormLabel htmlFor='email' mt="30px" color="gray">Name</FormLabel>
                <Input id='email' type='text' />
                <FormLabel htmlFor='email' mt="10px" color="gray">Email</FormLabel>
                <Input id='email' type='email' />
                <FormLabel htmlFor='subject' mt="10px" color="gray">Subject</FormLabel>
                <Input id='email' type='text' />
                <FormLabel htmlFor='contact' mt="10px" color="gray">Contact Reason</FormLabel>
                <Input id='email' type='text' />
                <FormLabel htmlFor='help' mt="10px" color="gray">How can we help?</FormLabel>
                <Textarea size="5xl"/>
                <FormHelperText color="gray">Please include your order number if applicable.</FormHelperText>
                <Button colorScheme="blue" p="8px 25px" mt="25px">Submit</Button>
            </FormControl>
      </Box>
      <Footbar/>
    </div>
  )
}

export default ContactUs