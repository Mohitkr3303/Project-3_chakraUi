import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={"center"}>
              Follow Us
            </Heading>
            <HStack>
              <Input
                placeholder="Enter Your Email..."
                border={'none'}
                focusBorderColor='none'
                borderRadius={'none'}
                borderBottom={'2px solid white'}
                outline={"none"}
              />
              <Button
                p={0}
                colorScheme="purple"
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={'20'} />
              </Button>
            </HStack>
          </VStack>

          <VStack
           w={'full'} 
           borderLeft={['none', '1px solid white']}
           borderRight={['none', '1px solid white']}
           >
            <Heading textTransform={"uppercase"} textAlign={"center"}>Video Hub</Heading>
            <Text>All Right Received</Text>

           </VStack>

           <VStack
           w={'full'} 
           >
            <Heading textTransform={"uppercase"} size={"md"}>Social Media</Heading>

            <Button variant={"solid"} colorScheme='purple'>
                <a href="youtube.com"> Youtube</a>
            </Button>
            <Button variant={"solid"} colorScheme='purple'>
                <a href="instagram.com"> Instagram</a>
            </Button>
            <Button variant={"solid"} colorScheme='purple'>
                <a href="linkedin.com"> LinkedIn</a>
            </Button>
                
           </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
