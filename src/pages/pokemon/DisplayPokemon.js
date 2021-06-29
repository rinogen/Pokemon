import React from 'react';
import { Link } from 'react-router-dom';
import {Image, Badge, Box,Text} from '@chakra-ui/react';


const DisplayPokemon = ({pokemon}) => {

    return (
        <>
            <Link to={`/pokemon/${pokemon.id}`}>
                <Image src={pokemon.sprites.other.dream_world.front_default} boxSize={{base:"50px", md:"80px" , lg:"100px"}}></Image>
                <Text mt="1" fontWeight="bold" lineHeight="tight" fontSize={{ base :"10px", md:"lg", lg:"xl"}} >
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Text>
                <Badge borderRadius="full" px="2" colorScheme="teal" size={{}}>
                #{pokemon.id.toString().padStart(3, '0')}
                </Badge>
                <Text fontSize={{ base :"10px", md:"lg", lg:"xl"}}>{pokemon.types[0].type.name}</Text>
            </Link>
        </>
    );
};


export default DisplayPokemon;