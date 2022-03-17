import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../Box';
import Button from './Button';
import { Spinner } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default {
  title: 'Compass/Components/Button',
  component: Button
} as ComponentMeta<typeof Button>;

export const Sizes: ComponentStory<typeof Button> = () => (
  <Box>
    <Box mb={4}>
      <Button size="xs">X-Small</Button>
    </Box>
    <Box mb={4}>
      <Button size="sm">Small</Button>
    </Box>
    <Box mb={4}>
      <Button size="md">Medium</Button>
    </Box>
  </Box>
);

export const Variants: ComponentStory<typeof Button> = () => (
  <Box>
    <Box mb={4}>
      <Button variant="solid">solid</Button>
    </Box>
    <Box mb={4}>
      <Button variant="outline">outline</Button>
    </Box>
    <Box mb={4}>
      <Button variant="ghost">ghost</Button>
    </Box>
    <Box mb={4}>
      <Button variant="link">link</Button>
    </Box>
  </Box>
);

export const Icons: ComponentStory<typeof Button> = () => (
  <Box>
    <Box mb={4}>
      <Button leftIcon={<SearchIcon />}>Left Icon</Button>
    </Box>
  </Box>
);

export const ColorsSolid: ComponentStory<typeof Button> = () => (
  <Box>
    <Box mb={4}>
      <Button variant="solid" colorScheme="blue">
        blue
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="solid" colorScheme="red">
        red
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="solid" colorScheme="orange">
        orange
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="solid" colorScheme="yellow">
        yellow
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="solid" colorScheme="sky">
        sky
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="solid" colorScheme="cyan">
        cyan
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="solid" colorScheme="green">
        green
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="solid" colorScheme="gray">
        gray
      </Button>
    </Box>
  </Box>
);

export const ColorsOutline: ComponentStory<typeof Button> = () => (
  <Box>
    <Box mb={4}>
      <Button variant="outline" colorScheme="blue">
        blue
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="outline" colorScheme="red">
        red
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="outline" colorScheme="orange">
        orange
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="outline" colorScheme="yellow">
        yellow
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="outline" colorScheme="sky">
        sky
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="outline" colorScheme="cyan">
        cyan
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="outline" colorScheme="green">
        green
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="outline" colorScheme="gray">
        gray
      </Button>
    </Box>
  </Box>
);

export const States: ComponentStory<typeof Button> = () => (
  <Box>
    <Box mb={4}>
      <Button variant="solid" isLoading>
        Start
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="solid" isLoading loadingText="Loading w/ text">
        Start
      </Button>
    </Box>
    <Box mb={4}>
      <Button
        variant="solid"
        isLoading
        loadingText="Loading w/ custom spinner"
        spinner={<Spinner color="red.500" />}
      >
        Start
      </Button>
    </Box>
    <Box mb={4}>
      <Button variant="solid" disabled>
        disabled
      </Button>
    </Box>
  </Box>
);
