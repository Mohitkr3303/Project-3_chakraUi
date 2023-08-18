import React from 'react';
import { Box,Container,Heading,Image, Stack, Text} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';

const headingOption = {
    pos:"absolute",
    right:"30%",
    top:"50%",
    Transform:"translate(-50%,-50%)",
    textTransform:"Uppercase",
    p:4,
    size:"2xl"
}

const Home = () => {
  return (
    <>
      <Box>
      <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
        >
          <Box
          w={"full"}
          h={"100vh"}
          >
              <Image src={img1} h={"90%"} w={"full"} objectFit={"cover"}/>
              <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
                  Watch The Future
              </Heading>
      
          </Box>

          <Box
          w={"full"}
          h={"100vh"}
          >
              <Image src={img2} h={"90%"} w={"full"} objectFit={"cover"}/>
              <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
                  Gaming is Future
              </Heading>
      
          </Box>

          <Box
          w={"full"}
          h={"100vh"}
          >
              <Image src={img3} h={"90%"} w={"full"} objectFit={"cover"}/>
              <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
                  Gaming On Console
              </Heading>
      
          </Box>

          <Box
          w={"full"}
          h={"100vh"}
          >
              <Image src={img4} h={"90%"} w={"full"} objectFit={"cover"}/>
              <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
                  Night Life is Cool
              </Heading>
      
          </Box>

         
        </Carousel>

        <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
           <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"}>Services</Heading>

           <Stack 
           h={"full"}
           p={4}
           alignItems={"center"}
           direction={["column","row"]}
           >

            <Image src={img5} h={[40,400]} filter={"hue-rotate(-130deg)"}/>
            <Text letterSpacing={1} lineHeight={6} p={["4","16"]} textAlign={"center"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, quo sit ipsam aut, dolorem ab doloribus voluptatem quod ducimus necessitatibus maxime soluta numquam et? Velit repellat, quisquam, exercitationem possimus, iste fugiat eaque nisi eligendi odio ullam maiores odit laboriosam fuga quasi. Ut quas minus iure dolor asperiores ab sequi. Quam adipisci dolorum fugiat ex eius placeat aliquid doloribus pariatur expedita est possimus, distinctio ut ab totam unde, labore ducimus dolores vitae! Ratione, debitis consequuntur distinctio aperiam, excepturi rem aut veniam explicabo cum minima ab, et ipsum illum. 
            </Text>

           </Stack>
        </Container>
        
      </Box>
    </>
    
  );
};


export default Home;
