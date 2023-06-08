import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Flex} from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});

Row.args = {
  children: (
    <>
      <div>div 1</div>
      <div>div 2</div>
      <div>div 3</div>
      <div>div 4</div>
    </>
  )
};

export const RowGap8 = Template.bind({});

RowGap8.args = {
  gap: '8',
  children: (
    <>
      <div>div 1</div>
      <div>div 2</div>
      <div>div 3</div>
      <div>div 4</div>
    </>
  )
};

export const RowGap32 = Template.bind({});

RowGap32.args = {
  gap: '32',
  children: (
    <>
      <div>div 1</div>
      <div>div 2</div>
      <div>div 3</div>
      <div>div 4</div>
    </>
  )
};

export const Column = Template.bind({});

Column.args = {
  direction: 'column',
  children: (
    <>
      <div>div 1</div>
      <div>div 2</div>
      <div>div 3</div>
      <div>div 4</div>
    </>
  )
};

export const ColumnGap16 = Template.bind({});

ColumnGap16.args = {
  direction: 'column',
  gap: '16',
  children: (
    <>
      <div>div 1</div>
      <div>div 2</div>
      <div>div 3</div>
      <div>div 4</div>
    </>
  )
};