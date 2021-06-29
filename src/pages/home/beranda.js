import Layout from '../../components/layout/layout';
import ash from '../../assets/img/PokeFamily.png';
import React, { useState} from 'react'
import { Box, Grid, Container, Image, Heading, GridItem, Text, Input, Button, Badge, SimpleGrid} from '@chakra-ui/react';
import axios from 'axios';

export default function Beranda(props) {
    const [pokemonName, setPokemonName] = useState("")
    const[isChoosen, setIsChoosen]=useState(false)
    const [pokemonInfo, setPokemonInfo] = useState({
        name: "",
        species: "",
        img : "",
        hp : "",
        attack : "",
        defense : "",
        type: "",
        weight:"",
        height:""})

    const searchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res)=>{
            console.log(res)
            setPokemonInfo({
                name: pokemonName,
                species: res.data.species.name,
                img : res.data.sprites.other.dream_world.front_default,
                hp : res.data.stats[0].base_stat,
                attack : res.data.stats[1].base_stat,
                defense : res.data.stats[2].base_stat,
                type: res.data.types[0].type.name,
                weight: res.data.weight,
                height: res.data.height
            })
            setIsChoosen(true);
        })
    }

    const TYPE_COLORS = {
        fire: '#FDDFDF',
	    grass: '#DEFDE0',
	    electric: '#FCF7DE',
	    water: '#DEF3FD',
	    ground: '#f4e7da',
	    rock: '#d5d5d4',
	    fairy: '#fceaff',
	    poison: '#98d7a5',
	    bug: '#f8d5a3',
	    dragon: '#97b3e6',
	    psychic: '#eaeda1',
	    flying: '#F5F5F5',
	    fighting: '#E6E0D4',
	    normal: '#F5F5F5'
      };

        return (
            <>
                <Layout>
                    <Container 
                    maxW="7xl" 
                    paddingTop={{ base: "7", md: "20", lg: "40" }}  
                    paddingLeft={{ base: "7", md: "20", lg: "20" }}  
                    paddingRight={{ base: "7", md: "20", lg: "20" }} 
                    paddingBottom={{ base: "100" }} >
    
                        <Grid as="grid" templateRows="repeat(2, 1fr)" templateColumns="repeat(6, 1fr)"  w="full" h="full">
                             <GridItem colSpan={4}>
                                <Box as="section" mt={{ base: "44", md: "28", lg: "0" }} paddingTop={{ base: "15", md:"15" , lg: "20" }}>
                                    <Heading as="h1" letterSpacing={"-0.05rem"} 
                                    lineHeight={"-.0.05rem"} fontSize={{sm:"2xl" , md: "5xl", lg: "6xl" }}>
                                        Hi I'am Ash Ketchum
                                        <br/>
                                        Let's Catch Them All
                                    </Heading>
                                </Box>
                             </GridItem>
                            
                            <GridItem flex="1" colSpan={2} >
                                <Box  as="image" mt={{ base: "44", md: "28", lg: "0" }}>
                                    <Image mt={{ base: "44", md: "28", lg: "0" }} src={ash} alt="Poke Family" />
                                </Box>`
                            </GridItem>
                            <GridItem colSpan={6} marginTop="10" align="center">
                                <Box>
                                    <Text fontSize={{sm:"2xl" , md: "5xl", lg: "6xl" }} fontWeight="bold">Pokemon Statistic</Text>
                                </Box>
                                <Box marginTop="10">
                                    <Input type="text" focusBorderColor="primary.100" placeholder="type pokemon name" width={{base:"50%", md:"40%",lg:"30%"}} 
                                    onChange={(event)=> {
                                        setPokemonName(event.target.value);
                                    }}/>
                                </Box>
                                <Box marginTop="5" >
                                    <Button onClick={searchPokemon} bg="primary.100" >Find Now</Button>
                                </Box>
                                <Box as="cardView" maxW="md" borderWidth="1px" borderRadius="lg" backgroundColor="primary.100" overflow="hidden" >
                                    <Image boxSize="100px" bg={`${TYPE_COLORS[pokemonInfo.type]}`} src={pokemonInfo.img} boxSize={{base:"50px", md:"80px" , lg:"200px"}} borderRadius="20"></Image>
                                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                                        {pokemonInfo.name}
                                    </Box>
                                    <Box fontWeight="semibold" letterSpacing="wide">
                                        Species : {pokemonInfo.species}
                                    </Box>
                                    <SimpleGrid columns={3} spacing={5} mt="5" w="48vh">
                                        <Box letterSpacing="wide">
                                            {pokemonInfo.type}
                                            <Text fontSize={{ base :"sm", md:"md", lg:"lg"}} fontWeight="bold">Type</Text>
                                        </Box>
                                        <Box letterSpacing="wide">
                                            {pokemonInfo.weight}
                                            <Text fontSize={{ base :"sm", md:"md", lg:"lg"}}fontWeight="bold">Weight</Text>
                                        </Box>
                                        <Box>
                                            {pokemonInfo.height}
                                            <Text fontSize={{base :"sm", md:"md", lg:"lg"}} fontWeight="bold">Height</Text>
                                        </Box>
                                        <Badge borderRadius="5px" bgColor="primary.100">
                                            <Text fontSize="14px" color="white">Hp: {pokemonInfo.hp}</Text>
                                        </Badge>
                                        <Badge borderRadius="5px" bgColor="teal">
                                            <Text fontSize="14px" color="white">Attack : {pokemonInfo.attack}</Text>
                                        </Badge>
                                        <Badge borderRadius="5px" bgColor="darkturquoise">
                                            <Text fontSize="14px" color="white">Defense : {pokemonInfo.defense}</Text>
                                        </Badge>
                                    </SimpleGrid>
                                </Box>
                            </GridItem>                  
                        </Grid>
                    </Container>
                </Layout>
            </>
        )
    }

