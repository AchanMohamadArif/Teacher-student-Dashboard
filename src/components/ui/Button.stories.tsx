import React from 'react';
import { Meta, StoryFn } from '@storybook/react'; // Updated imports
import Button from './Button';

// Meta is used to define component metadata
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>; // Updated Meta type

// Template using StoryFn
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />; 

// Define different story variants
export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};
