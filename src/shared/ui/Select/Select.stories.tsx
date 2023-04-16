import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Select} from 'shared/ui/Select/Select'
import SelectImg from './Select.jpeg'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select value',
  options: [{value: 'value', content: 'content'}, {value: 'value 2', content: 'content 2'}]
};