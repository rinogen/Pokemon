import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/layout'
import DisplayPokemon from './DisplayPokemon';
import { Box,  Container, Grid, Center} from '@chakra-ui/react';
import Loader from '../../components/pokemon/Loader';

export default function Pokemon(props) {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true)

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

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i = 1; i <= 150; i ++){
            pokemonArray.push(await getPokemonData(i));
        }
        console.log(pokemonArray);
        setPokemon(pokemonArray);
        setLoading(false);
    }

    
    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect( () => {
        getPokemonList();
    },)

    if (loading) return <Loader/>

    return (
        <>
        <Layout>
            <Container maxW="7xl" paddingTop={{ base: "7", md: "20", lg: "40" }}  paddingLeft={{ base: "7", md: "20", lg: "20" }}  paddingRight={{ base: "7", md: "20", lg: "20" }}  paddingBottom={{ base: "20" }}  minHeight="90vh">
                <Box mt={{ base: "20", md: "28", lg: "0" }}>
                    <Grid as="grid" h="full" width="full" templateRows="repeat(1, 1fr)" templateColumns="repeat(4, 1fr)" gap={{ base:"3", md: "3", lg:"2" }} alignContent="center">
                        {pokemon.map(p =>{
                            return (
                                <Box align="center" flex="1" as="cardView" bg={`${TYPE_COLORS[p.data.types[0].type.name]}`} key={p} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" alignItems="center" padding="5" >
                                    <Center>
                                        <DisplayPokemon pokemon={p.data}/>
                                    </Center>
                                </Box>
                            )
                        })}
                    </Grid>
                </Box>
            </Container>
        </Layout> 

        </>
    )
    
}
