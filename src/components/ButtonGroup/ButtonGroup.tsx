import React from 'react';
import {
  ButtonGroup as ChakraButtonGroup,
  ButtonGroupProps
} from '@chakra-ui/react';
import Button from '../Button/Button';

interface StaticProps extends ButtonGroupProps {
  items: string[];
  onUpdate: Function;
  colorScheme?: 'red' | 'blue' | 'teal';
}

type DynamicProps =
  | {
      allowMultiple?: false;
      selected?: string | null;
      isRadio?: boolean;
    }
  | {
      allowMultiple: true;
      selected?: string[];
      isRadio?: false;
    }
  | {
      isRadio?: true;
      allowMultiple?: false;
      selected?: string | null;
    };

type Props = StaticProps & DynamicProps;

const ButtonGroup = ({
  isRadio,
  selected,
  allowMultiple,
  items,
  onUpdate,
  ...props
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value: string = e.currentTarget.value;
    if (isRadio) handleRadioClick(value);
    else if (allowMultiple === true) handleMultipleClick(value);
    else handleSingleClick(value);
  };

  const handleMultipleClick = (value: string) => {
    if (!Array.isArray(selected)) {
      throw Error(
        'selected prop must be a string array if using the allowMultiple prop'
      );
    }

    if (selected.includes(value)) {
      onUpdate(selected.filter((s) => s !== value));
    } else {
      onUpdate([...selected, value]);
    }
  };

  const handleRadioClick = (value: string) => {
    if (value === selected) return;
    else onUpdate(value);
  };

  const handleSingleClick = (value: string) => {
    if (value === selected) onUpdate(null);
    else onUpdate(value);
  };

  if (!items?.length || items.length < 2)
    throw new Error('Button Group requires at least two items');

  const color = 'gray';

  return (
    <ChakraButtonGroup colorScheme={color} variant="outline" {...props}>
      {items.map((item) => {
        const isSelected = allowMultiple
          ? selected?.find((s) => s === item)
          : item === selected;
        return (
          <Button
            key={item}
            onClick={handleClick}
            value={item}
            bg={isSelected ? `${color}.200` : undefined}
          >
            {item}
          </Button>
        );
      })}
    </ChakraButtonGroup>
  );
};

export default ButtonGroup;
