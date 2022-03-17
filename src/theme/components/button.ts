import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '.25rem'
  },
  sizes: {
    xs: {
      fontSize: '1rem',
      padding: '0.5rem 1rem',
      height: '2.5rem'
    },
    sm: {
      fontSize: '1rem',
      padding: '.625rem 1.25rem',
      height: '2.75rem'
    },
    md: {
      fontSize: '1rem',
      padding: '.75rem 1.5rem',
      height: '3rem'
    }
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline'
  }
};

export default Button;
