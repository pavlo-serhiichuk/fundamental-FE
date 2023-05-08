import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Skeleton} from './Skeleton';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  width: 300,
  height: 50
};

export const Circle = Template.bind({});

Circle.args = {
  borderRadius:'50%',
  width: 100,
  height: 100
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
  width: 300,
  height: 50
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark = Template.bind({});

CircleDark.args = {
  borderRadius:'50%',
  width: 100,
  height: 100
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]