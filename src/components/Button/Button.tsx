import React from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {}

const Button = (props: Props) => {
  return <ChakraButton {...props} />;
};

export default Button;
