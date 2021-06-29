import Layout from '../../components/layout/layout'
import { Box,  Container, Grid, Heading, Text, GridItem, Image} from '@chakra-ui/react';
import AllPokemon from '../../assets/img/allPokemon.jpg';
import Universe1 from '../../assets/img/universe1.jpg';
import Universe2 from '../../assets/img/universe2.jpg';
import Universe3 from '../../assets/img/universe3.jpg';
import Universe4 from '../../assets/img/universe4.jpg';
import Universe5 from '../../assets/img/universe5.jpg';

export default function About(props) {
        return (
            <>
                <Layout>
                    <Container maxW="7xl" paddingTop={{ base: "7", md: "20", lg: "40" }}  paddingLeft={{ base: "7", md: "20", lg: "20" }}  paddingRight={{ base: "7", md: "20", lg: "20" }} pb="10" minHeight="90vh">
                        {/* <Fade duration={500} distance="30px" fraction={0.4} bottom> */}
                            <Box mt={{ base: "20", md: "28", lg: "0" }}>
                                <Heading as="h1" mb="5" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "2xl", md: "5xl", lg: "7xl" }}>
                                    Pokemon Universe
                                </Heading>
                                <Image src ={AllPokemon}
                                                loading="lazy"
                                                alt="picture"
                                                boxSize="full"
                                                objectFit="cover"
                                                borderRadius="md"
                                                width="full"
                                                height="full"
                                                >
                                        </Image>
                                        <Box>
                                     <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign="justify" fontSize={{ base: "xs", md: "sm", lg: "xl" }} width="full">
                                        It is not yet known how, but in the midst of a vortex of nothingness an egg was created, 
                                        and hatched from this egg was the legendary Pokémon Arceus. Arceus, also known as “The Original 
                                        One,” is widely regarded as the creator of the entire Pokémon Universe. In addition to this noteworthy 
                                        accomplishment (understatement of the year), the legendary beast is also credited with the creation of 
                                        the Lake Guardians as well as the Creation Trio. The Lake Guardians, of course, refer to Uxie, Mesprit, 
                                        and Azelf who each reside over the three lakes of Sinnoh while the Creation Trio is comprised of Dialga, 
                                        Palkia, and Giratina. At the beginning of the universe, however, it was the Creation Trio that was first 
                                        given life by The Original One.
                                        </Text>
                                    </Box>
                                <Text mt="10" letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "sm", md: "xl", lg: "2xl" }} maxW="xl">
                                    Here is the <strong>Complete History of Pokemon Universe</strong>
                                </Text>
                            </Box>
                            
                        {/* </Fade> */}
                            <Grid pt={10}
                                    h="full"
                                    maxH="full"
                                    templateRows="repeat(12, 1fr)"
                                    templateColumns="repeat(10, 1fr)"
                                    gap={8}>

                                <GridItem rowSpan={3} colSpan={10} >
                                    <Box >
                                        <Heading color="gray" as="h1" letterSpacing={"-.0.001rem"} 
                                        fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}>
                                            5/5 
                                        </Heading>
                                    </Box>

                                    <Box mb="5">
                                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "sm", md: "xl", lg: "2xl" }} maxW="xl">
                                            <strong>Begining of The Universe</strong>
                                        </Text>
                                    </Box>
                                    <Box mb="5">
                                        <Image src ={Universe1}
                                                loading="lazy"
                                                alt="picture"
                                                boxSize="full"
                                                objectFit="cover"
                                                borderRadius="md"
                                                width="full"
                                                height="full"
                                                >
                                        </Image>
                                    </Box>
                                    <Box>
                                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign="justify" fontSize={{ base: "xs", md: "sm", lg: "xl" }} width="full">
                                        It is not yet known how, but in the midst of a vortex of nothingness an egg was created, 
                                        and hatched from this egg was the legendary Pokémon Arceus. Arceus, also known as “The Original 
                                        One,” is widely regarded as the creator of the entire Pokémon Universe. In addition to this noteworthy 
                                        accomplishment (understatement of the year), the legendary beast is also credited with the creation of 
                                        the Lake Guardians as well as the Creation Trio. The Lake Guardians, of course, refer to Uxie, Mesprit, 
                                        and Azelf who each reside over the three lakes of Sinnoh while the Creation Trio is comprised of Dialga, 
                                        Palkia, and Giratina. At the beginning of the universe, however, it was the Creation Trio that was first 
                                        given life by The Original One.
                                        </Text>
                                    </Box>

                                </GridItem>

                                <GridItem rowSpan={3} colSpan={10} >
                                    <Box >
                                        <Heading color="gray" as="h1" letterSpacing={"-.0.001rem"} 
                                        fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}>
                                            4/5 
                                        </Heading>
                                    </Box>

                                    <Box mb="5">
                                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "sm", md: "xl", lg: "2xl" }} maxW="xl">
                                            <strong>Dawn of Men</strong>
                                        </Text>
                                    </Box>
                                    <Box mb="5">
                                        <Image src ={Universe2}
                                                loading="lazy"
                                                alt="picture"
                                                boxSize="full"
                                                objectFit="cover"
                                                borderRadius="md"
                                                width="full"
                                                height="full">
                                        </Image>
                                    </Box>
                                    <Box>
                                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign="justify" fontSize={{ base: "xs", md: "sm", lg: "xl" }} width="full">
                                        Some millions of years ago, it is said that the first humans appeared in the Pokémon world. While evolution is known 
                                        to having taken place in the Pokémon world (thanks to Alolan forms from the latest titles Pokémon Sun & Moon), it is 
                                        still uncertain where humans came from exactly. Did humans in the Pokémon universe evolve from primates? Are there even 
                                        animals in the Pokémon universe? Well, it is true that Pokémon are very animal-like, but contrary to popular belief, they 
                                        are not actually animals. In fact, Pokémon are often referred to in relation to their animal counterparts. For example, 
                                        the franchise’s beloved mascot, Pikachu, is known as an “electric mouse” according to the anime.
                                        </Text>
                                    </Box>

                                </GridItem>

                                <GridItem rowSpan={3} colSpan={10} >
                                    <Box >
                                        <Heading color="gray" as="h1" letterSpacing={"-.0.001rem"} 
                                        fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}>
                                            3/5 
                                        </Heading>
                                    </Box>

                                    <Box mb="5">
                                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "sm", md: "xl", lg: "2xl" }} maxW="xl">
                                            <strong>Invention Of The Pokéball</strong>
                                        </Text>
                                    </Box>
                                    <Box mb="5">
                                        <Image src ={Universe3}
                                                loading="lazy"
                                                alt="picture"
                                                boxSize="full"
                                                objectFit="cover"
                                                borderRadius="md"
                                                width="full"
                                                height="full">
                                        </Image>
                                    </Box>
                                    <Box>
                                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign="justify" fontSize={{ base: "xs", md: "sm", lg: "xl" }} width="full">
                                        It is not yet known how, but in the midst of a vortex of nothingness an egg was created, 
                                        and hatched from this egg was the legendary Pokémon Arceus. Arceus, also known as “The Original 
                                        One,” is widely regarded as the creator of the entire Pokémon Universe. In addition to this noteworthy 
                                        accomplishment (understatement of the year), the legendary beast is also credited with the creation of 
                                        the Lake Guardians as well as the Creation Trio. The Lake Guardians, of course, refer to Uxie, Mesprit, 
                                        and Azelf who each reside over the three lakes of Sinnoh while the Creation Trio is comprised of Dialga, 
                                        Palkia, and Giratina. At the beginning of the universe, however, it was the Creation Trio that was first 
                                        given life by The Original One.
                                        </Text>
                                    </Box>

                                </GridItem>

                                <GridItem rowSpan={3} colSpan={10} >
                                    <Box >
                                        <Heading color="gray" as="h1" letterSpacing={"-.0.001rem"} 
                                        fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}>
                                            2/5 
                                        </Heading>
                                    </Box>

                                    <Box mb="5">
                                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "sm", md: "xl", lg: "2xl" }} maxW="xl">
                                            <strong>Disbandment Of Team Rocket</strong>
                                        </Text>
                                    </Box>
                                    <Box mb="5">
                                        <Image src ={Universe4}
                                                loading="lazy"
                                                alt="picture"
                                                boxSize="full"
                                                objectFit="cover"
                                                borderRadius="md"
                                                width="full"
                                                height="full">
                                        </Image>
                                    </Box>
                                    <Box>
                                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign="justify" fontSize={{ base: "xs", md: "sm", lg: "xl" }} width="full">
                                        Team Rocket had been behind countless less than questionable acts that led them to be one of the most feared criminal organizations 
                                        in the history of the Pokémon universe. Kidnapping, experimenting on Pokémon, and Pokémon theft are just a few examples of crimes
                                         that were common among Team Rocket members, but Red quickly put an end to their wicked ways through Pokémon battles. Giovanni and
                                          his respective gang lasted two gaming generations until they finally disbanded sometime after the events of Gold and Silver, 
                                          leaving Red’s longtime rival, Blue, the responsibility of tending to the Viridian City Gym where he served as the gym leader.
                                        </Text>
                                    </Box>

                                </GridItem>
                                <GridItem rowSpan={3} colSpan={10} >
                                    <Box >
                                        <Heading color="gray" as="h1" letterSpacing={"-.0.001rem"} 
                                        fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}>
                                            1/5 
                                        </Heading>
                                    </Box>

                                    <Box mb="5">
                                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "sm", md: "xl", lg: "2xl" }} maxW="xl">
                                            <strong>A New Pokémon League Champion</strong>
                                        </Text>
                                    </Box>
                                    <Box mb="5">
                                        <Image src ={Universe5}
                                                loading="lazy"
                                                alt="picture"
                                                boxSize="full"
                                                objectFit="cover"
                                                borderRadius="md"
                                                width="full"
                                                height="full">
                                        </Image>
                                    </Box>
                                    <Box>
                                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign="justify" fontSize={{ base: "xs", md: "sm", lg: "xl" }} width="full">
                                        Many events have transpired over the course of the entire history of the Pokémon universe, but in the modern age, 
                                        perhaps no one person has been a greater catalyst for change than the aforementioned Pokémon trainer Red. Making his 
                                        way through the entirety of the Kanto region, winning all eight gym badges, and taking on the Elite 4, Red quickly made
                                         his name as the best trainer in the Pokémon world. Not only did Red defeat Team Rocket, forcing them to disband, but he 
                                         also went on to become Pokémon League Champion after besting Blue in a Pokémon battle. As mentioned earlier, Blue went on to
                                          serve as the Viridian City Gym Leader after losing to his childhood rival. After years as acting Pokémon League Champion, Red
                                          retreated to Mt. Silver where he continued to train. Dragon-type trainer Lance then resumed his role as Pokémon League Champion 
                                          and the Elite 4 continued to shuffle around with new members over the years. However, Red has managed to make appearances in 
                                          various Pokémon titles over the years, including the franchise’s most recent, and historically successful games Pokémon Sun & Moon.
                                        </Text>
                                    </Box>

                                </GridItem>
                            </Grid>

                    </Container>
                </Layout>
            </>
        )
}
