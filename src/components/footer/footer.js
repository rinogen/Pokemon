import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { GridItem, Grid, Container, Image, Link } from '@chakra-ui/react';
import React from 'react';
import Pokedex from '../../assets/img/pokedex.jpg';
const Footer = (props) => {
    return (
        <>
           <Box pt="8" pb="8"  position="relative" as="footer"  mt={{base:"5",md:"10",lg:"20"}} 
           bg={["primary.100", "primary.100", "white", "white"]}
           color={["white", "white", "primary.100", "primary.100"]} {...props}>
               <Container maxW="7xl" paddingX={{base: "7", md: "20", lg: "20" }} >

               <Grid templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(4, 1fr)"
                    gap={{md:"2" , lg:"5"}}
                    w="full"
                    h="full">
                   <GridItem rowSpan={1} colSpan={1}>
                        <Image borderRadius="10" boxSize={{ base: "35", md: "35", lg: "55" }} src={Pokedex}></Image>
                        <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"}  textAlign="left" fontSize={{ base :"8px", md:"md", lg:"xl"}} fontWeight="bold">Pokedex</Text>
                        <Text fontSize={{ base :"6px", md:"sm", lg:"sm"}} textAlign="left" fontWeight="semibold">Digital Encyclopedia of Pokemon</Text>
                   </GridItem>

                   <GridItem rowSpan={1} colSpan={1}>
                       <Text fontSize={{ base :"8px", md:"lg", lg:"xl"}} textAlign="left" fontWeight="bold">Explore</Text>
                       <Text fontSize={{ base :"6px", md:"sm", lg:"md"}} textAlign="left"><Link href="/beranda">Beranda</Link></Text>
                       <Text fontSize={{ base :"6px", md:"sm", lg:"md"}} textAlign="left"><Link href="/pokemon">Pokemon</Link></Text>
                       <Text fontSize={{ base :"6px", md:"sm", lg:"md"}} textAlign="left"><Link href="/about">About</Link></Text>
                   </GridItem>

                   <GridItem rowSpan={1} colSpan={1}>
                       <Text fontSize={{ base :"8px", md:"lg", lg:"xl"}} textAlign="left" fontWeight="semibold">Contact Me</Text>
                       <Text fontSize={{ base :"6px", md:"sm", lg:"md"}} textAlign="left"><Link href="https://github.com/rinogen" isExternal><i className="fa fa-github" aria-hidden="true"></i> Github</Link></Text>
                       <Text fontSize={{ base :"6px", md:"sm", lg:"md"}} textAlign="left"><Link href="https://www.linkedin.com/in/hubertusrino/" isExternal><i className="fa fa-linkedin" aria-hidden="true"/> Linked In</Link></Text>
                       <Text fontSize={{ base :"6px", md:"sm", lg:"md"}} textAlign="left"><Link href="https://www.instagram.com/rinogen10/" isExternal><i className="fa fa-instagram" aria-hidden="true"/> Instagram</Link></Text>
                   </GridItem>
                
                   <GridItem rowSpan={1} colSpan={1}>
                       <Text fontSize={{ base :"6px", md:"sm", lg:"md"}} textAlign="right" fontWeight="bold"><i class="fa fa-copyright" aria-hidden="true"/> 2021 Hubertus Rino Augenio</Text>
                       <Text fontSize={{ base :"6px", md:"sm", lg:"sm"}} textAlign="right" fontWeight="bold"><Link href="https://pokeapi.co/" isExternal><i class="fa fa-code" aria-hidden="true"/> Pokeapi</Link></Text>
                   </GridItem>
               </Grid>
               </Container>
                
            </Box>
        </>
    );
};

export default Footer;