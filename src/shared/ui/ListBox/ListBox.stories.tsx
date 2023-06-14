import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ListBox} from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    Story => (
      <div style={{padding: 150}}><Story /></div>
    ),
  ]
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const TopRight = Template.bind({});

TopRight.args = {
  direction: 'top right',
  value: '...',
  items: [
    {value: '123', content: 'content value'},
    {value: '123', content: 'content value'},
    {value: '123', content: 'content value'},
  ]
};

export const TopLeft = Template.bind({});

TopLeft.args = {
  direction: 'top left',
  value: '...',
  items: [
    {value: '123', content: 'content value'},
    {value: '123', content: 'content value'},
    {value: '123', content: 'content value'},
  ]
};

export const BottomRight = Template.bind({});

BottomRight.args = {
  direction: 'bottom right',
  value: '...',
  items: [
    {value: '123', content: 'content value'},
    {value: '123', content: 'content value'},
    {value: '123', content: 'content value'},
  ]
};

export const BottomLeft = Template.bind({});

BottomLeft.args = {
  direction: 'bottom left',
  value: '...',
  items: [
    {value: '123', content: 'content value'},
    {value: '123', content: 'content value'},
    {value: '123', content: 'content value'},
  ]
};