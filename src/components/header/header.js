import { Button } from '@chakra-ui/button';
import { Heading } from '@chakra-ui/layout';
import { Stack } from '@chakra-ui/layout';
import { Box, Flex } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    const [ isOpen, setIsOpen ] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <>
        <Flex 
        as="header" 
        position="fixed" 
        align="center" 
        justify="space-between" 
        wrap="wrap" w="100%" p={8}  
        bg={["primary.100", "primary.100", "white", "white"]}
        color={["white", "white", "primary.100", "primary.100"]} {...props}>
                <Heading as="heading_1" size="md" fontSize={{base: "sm", md: "md", lg: "md"}}>
                    Pokedex
                </Heading>
                <MenuToggle toggle={toggle} isOpen={isOpen} />
                <MenuLinks isOpen={isOpen} />
        </Flex>
        </>
    )
}
const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>Close</title>
      <path
        fill="white"
        d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
      />
    </svg>
  );

const MenuIcon = () => (
    <svg
      width="24px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);
  
const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    );
};

const MenuLinks = ({isOpen}) =>{
    return(
    <Box display={{base:isOpen? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }} textAlign="center" >
        <Stack  spacing={5} justify={["center", "space-between", "flex-end", "flex-end"]} direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]} >
            <Button mt={{ base: 5, md: 3 , lg:0 }} mr={6} display="block" size="sm" backgroundColor="transparent" >
                <Link to="/beranda">Beranda</Link>
            </Button>
            <Button  mt={{ base: 5, md: 3, lg:0 }} mr={6} display="block" size="sm" backgroundColor="transparent" >
                <Link to="/pokemon">Pokemon</Link>
            </Button>
            <Button  mt={{ base: 5, md: 3, lg:0 }} mr={6} display="block" size="sm" backgroundColor="transparent" >
                <Link to="/about">About</Link>
            </Button>
        </Stack>
    </Box>
    )
}

export default Header;