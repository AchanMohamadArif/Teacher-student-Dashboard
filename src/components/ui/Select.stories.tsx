import React, { useState } from 'react';
import Select from './Select';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => {
  const [selected, setSelected] = useState('student');

  return (
    <div className="max-w-sm">
      <Select
        {...args}
        value={selected}
        onChange={(e) => setSelected(e.target.value)}  // Keep this here to control the selected value in the story
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Student', value: 'student' },
    { label: 'Teacher', value: 'teacher' },
  ],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { label: 'Student', value: 'student' },
    { label: 'Teacher', value: 'teacher' },
  ],
  disabled: true,
};
