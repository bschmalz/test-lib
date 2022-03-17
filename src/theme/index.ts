import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import Button from './components/button';

export const theme = extendTheme({
  colors,
  components: {
    Button
  }
});
