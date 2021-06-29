import React from 'react';
import loadimg from '../../assets/img/Loading.png';
import { Box,  Text, Grid, Container, Center, Image, Spinner} from '@chakra-ui/react';

const Loader = () => {
    return (
        <>
        <Container 
                    maxW="7xl" 
                    paddingTop={{ base: "7", md: "20", lg: "40" }}  
                    paddingLeft={{ base: "7", md: "20", lg: "20" }}  
                    paddingRight={{ base: "7", md: "20", lg: "20" }} 
                    paddingBottom={{ base: "20" }}  
                    minHeight="90vh">
             <Grid  alignItems="center" align="center" >
                    <Center>
                    <Box mt={{ base: "44", md: "28", lg: "0" }} boxSize={{sm:"200px", md:"350px", lg:"500px"}}>
                            <Image src={loadimg} alt="Loaading..." />
                            <Text fontSize={{base:"20px", md:"20px", lg:"30px"}} color="primary.100" fontWeight="bold"> Please Wait and Keep Smile </Text>
                            <br/>
                            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl"/>
                    </Box>
                    </Center>

                </Grid>
        </Container>
        </>
    );
};

export default Loader;