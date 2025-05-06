import React, { useState } from 'react';
import Input from './Input';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },  // Make sure `disabled` is controllable in Storybook
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('');
  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter something...',
  disabled: false,  // Ensure this works
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled input',
  disabled: true,  // Ensure this works
};
