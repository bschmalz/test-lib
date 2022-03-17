import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../Box';
import ButtonGroup from './ButtonGroup';

export default {
  title: 'Compass/Components/ButtonGroup',
  component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>;

export const Radio: ComponentStory<typeof ButtonGroup> = () => {
  const [selected, updateSelected] = useState('one');

  const handleUpdate = (value: string) => {
    updateSelected(value);
  };

  return (
    <Box>
      <ButtonGroup
        isAttached
        items={['one', 'two', 'three']}
        selected={selected}
        onUpdate={handleUpdate}
        isRadio
      />
    </Box>
  );
};

export const Single: ComponentStory<typeof ButtonGroup> = () => {
  const [selected, updateSelected] = useState('one');

  const handleUpdate = (value: string) => {
    updateSelected(value);
  };

  return (
    <Box>
      <ButtonGroup
        isAttached
        items={['one', 'two', 'three']}
        selected={selected}
        onUpdate={handleUpdate}
      />
    </Box>
  );
};

export const AllowMultiple: ComponentStory<typeof ButtonGroup> = () => {
  const [selected, updateSelected] = useState(['one']);

  const handleUpdate = (value: string[]) => {
    updateSelected(value);
  };

  return (
    <Box>
      <ButtonGroup
        isAttached
        items={['one', 'two', 'three']}
        allowMultiple
        selected={selected}
        onUpdate={handleUpdate}
      />
    </Box>
  );
};

export const Rating: ComponentStory<typeof ButtonGroup> = () => {
  const [selected, updateSelected] = useState(null);

  const handleUpdate = (value: string) => {
    updateSelected(value);
  };

  return (
    <Box>
      <ButtonGroup
        isAttached
        items={['1', '2', '3', '4', '5']}
        selected={selected}
        onUpdate={handleUpdate}
      />
    </Box>
  );
};
