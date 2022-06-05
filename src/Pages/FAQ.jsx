import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import styles from "./Pages.module.css"
import Footbar from "../Components/Footbar";

const FAQ = () => {
  return (
    <div>
      <Navbar/>
      <Text mt="50px" textAlign="center" fontSize="4xl" fontWeight={600}>Frequently Asked Questions</Text>
      <Tabs isFitted variant="soft-rounded" colorScheme="green" w="70%" m="auto" mt="50px" >
        <TabList >
          <Tab>Pricing and Payments</Tab>
          <Tab>Listing and Catalog</Tab>
          <Tab>Order Management and Shipping</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Accordion allowToggle mt="40px">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    Who decides the price of the product?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                As a seller, you will set the price of your products.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        What is Commission fee and how much commission is charged?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Commission fee is a certain percentage of the order item value of your product. It differs across categories and vertical/sub-categories.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        How and when do I get paid?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                All payments are made through NEFT transactions (online banking). The payment is made directly to your bank account within the next 7-15 business days from the date of order dispatch. It's 7 business days for Gold Sellers, 10 business days for Silver Sellers and 15 business days for Bronze sellers.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                  What are the fees charged?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                The following deductions are made from the order item value:
                  Commission fee: A percentage of the order item value based on vertical/sub-category
                  Shipping fee: Calculated on the basis of the product weight and shipping location
                  Collection fee: This will vary based on order item value and customer payment mode (Prepaid/Cash on Delivery)
                  Fixed fee: A slab wise Fixed fee. This varies based on Order item value
                </AccordionPanel>
              </AccordionItem>
        </Accordion>
          </TabPanel>
          <TabPanel>

          <Accordion allowToggle mt="40px">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    What is listing?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Listing a product refers to filling out all the necessary information and adding images of the product so that a customer can make an informed buying decision.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    How do I list my products on TannerWoods?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                We give you a step-by-step process of how to list your products on our website. It is important to choose the most suitable category to list your product as it will help customers find your products faster. Based on the category you choose, you'll be asked to include product details such as size, model, color, etc.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    Can I get help for the development of the catalog (product images, description, etc.)?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Yes, we are happy to help you at every stage while doing business with us. We help you connect with industry experts for the development of your catalogs. With the help of our catalog partners across India, you can have attractive images and crisp content developed at unbeatable prices.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    How does a catalog partner help me?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Our catalog partners develop high-quality photographs of your products and crisp product descriptions for your product catalog. A good catalog gives your customers a better understanding of your products and helps boost your sales. List of cataloging partners here.
                </AccordionPanel>
              </AccordionItem>
        </Accordion>
          </TabPanel>
          <TabPanel>
            
          <Accordion allowToggle mt="40px">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    Who takes care of the delivery of my products?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Our logistics partner will pick up the product from you and deliver it to the customer. All you need to do is keep it packed and ready for dispatch
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    What should I do if my area is not serviceable by TannerWoods?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                During registration, save the details of your pin code and click on the Continue button. You will be notified via e-mail when your pin code becomes serviceable.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    How do I manage my orders on Tanner Woods?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Through our seller dashboard, we make it really easy for you to manage your orders. Whenever a customer places an order, we will send you an e-mail alert. You need to pack the order and keep it ready for dispatch within the time frame provided by you and inform us through the seller portal. This will alert our logistics partner to pick up the product from you.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    Does Tanner Woods provide packaging material?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                We have a strong network of best packaging material providers in the industry. We can connect you with them to get good quality packaging material which impresses the customers and ensures your products remain undamaged.
                </AccordionPanel>
              </AccordionItem>
        </Accordion>
          </TabPanel>
        </TabPanels>
      </Tabs>
        <Box mt="40px"></Box>
      <Footbar/>
    </div>
  );
};

export default FAQ;
