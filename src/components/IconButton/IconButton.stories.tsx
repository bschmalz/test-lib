import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../Box';
import IconButton from './IconButton';
import { SearchIcon } from '@chakra-ui/icons';

export default {
  title: 'Compass/Components/IconButton',
  component: IconButton
} as ComponentMeta<typeof IconButton>;

export const Sizes: ComponentStory<typeof IconButton> = () => (
  <Box>
    <Box mb={4}>
      <IconButton size="xs" aria-label="x small" icon={<SearchIcon />} />
    </Box>
    <Box mb={4}>
      <IconButton size="sm" aria-label="small" icon={<SearchIcon />} />
    </Box>
    <Box mb={4}>
      <IconButton size="md" aria-label="medium" icon={<SearchIcon />} />
    </Box>
  </Box>
);

export const Variants: ComponentStory<typeof IconButton> = () => (
  <Box>
    <Box mb={4}>
      <IconButton
        colorScheme="blue"
        aria-label="x small"
        variant="solid"
        icon={<SearchIcon />}
      />
    </Box>
    <Box mb={4}>
      <IconButton
        colorScheme="blue"
        aria-label="outline"
        variant="outline"
        icon={<SearchIcon />}
      />
    </Box>
    <Box mb={4}>
      <IconButton
        colorScheme="blue"
        aria-label="ghost"
        variant="ghost"
        icon={<SearchIcon />}
      />
    </Box>
  </Box>
);
