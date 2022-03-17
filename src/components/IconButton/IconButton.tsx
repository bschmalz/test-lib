import React from 'react';
import {
  IconButton as ChakraIconButton,
  IconButtonProps
} from '@chakra-ui/react';

interface Props extends IconButtonProps {}

const IconButton = (props: Props) => {
  // Chakra theme doesn't seem to work well with iconbutton and padding
  // They should accept the button theme but that is broken so we are just
  // forcing it here.
  let p;
  if (props.size === 'xs') p = '8px 16px';
  else if (props.size === 'sm') p = '10px 20px';
  else p = '12px 24px';
  return <ChakraIconButton p={p} {...props} />;
};

export default IconButton;
