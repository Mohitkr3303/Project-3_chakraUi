import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        p={0}
        pos={'fixed'}
        top={2}
        left={4}
        w={10}
        h={10}
        borderRadius={'full'}
        colorScheme="purple"
        onClick={onOpen}
        zIndex={10}
      >
        <BiMenuAltLeft size={'25'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
                <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                    <Link to={"/"}>Home</Link>
                </Button>
                <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                    <Link to={"/Videos"}>Videos</Link>
                </Button>
                <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                    <Link to={"/Videos?category=free"}>Free Videos</Link>
                </Button>
                <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                    <Link to={"/upload"}>Upload Video</Link>
                </Button>
            </VStack>
            <HStack 
            pos={"absolute"}
            bottom={2}
            left={0}
            
            w={"full"}
            justifyContent={"space-evenly"}
            >
                <Button colorScheme='purple'onClick={onClose}>
                    <Link to={"/login"}>Log In</Link>
                </Button>

                <Button colorScheme='purple' variant={"outline"} onClick={onClose}>
                    <Link to={"/signup"}>Sign Up</Link>
                </Button>


            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
