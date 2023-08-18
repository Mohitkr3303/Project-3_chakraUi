import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      pos={'fixed'}
      top={2}
      right={2}
      icon={<SwitchIcon />}
      {...props}
      zIndex={10}
    />
  );
};

export default ColorModeSwitcher;
