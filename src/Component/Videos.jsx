import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';

const Videos = () => {
 
  return (
    <>
      <Stack direction={['column', 'row']} height={'100vh'}>
        <VStack width={'full'}>
          <video
            controls
            autoPlay
            controlsList="nodownload"
            src=""
            style={{
              width: '100%',
            }}
          ></video>

          <VStack
            alignItems={'flex-start'}
            p={'5'}
            width={'full'}
            overflowX={'auto'}
          >
            <Heading textTransform={'uppercase'}>Sample Videos 1</Heading>
            <Text textTransform={'uppercase'}>
              This is Sample Video For Testing and demo. this ia called
              description
            </Text>
          </VStack>
        </VStack>

        <VStack
          width={['full', 'xl']}
          alignItems={'stretch'}
          p={8}
          spacing={8}
          overflowY={'auto'}
        >
          <Button variant={'ghost'} colorScheme="purple">
            Lecture 1
          </Button>
          <Button variant={'ghost'} colorScheme="purple">
            Lecture 2
          </Button>
          <Button variant={'ghost'} colorScheme="purple">
            Lecture 3
          </Button>
          <Button variant={'ghost'} colorScheme="purple">
            Lecture 4
          </Button>
          <Button variant={'ghost'} colorScheme="purple">
            Lecture 5
          </Button>
          <Button variant={'ghost'} colorScheme="purple">
            Lecture 6
          </Button>
          <Button variant={'ghost'} colorScheme="purple">
            Lecture 7
          </Button>
        </VStack>
      </Stack>
    </>
  );
};

export default Videos;
