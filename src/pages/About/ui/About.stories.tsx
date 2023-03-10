import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {About} from 'pages/About'

export default {
  title: 'pages/About',
  component: About,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const Light = Template.bind({});
Light.args = {}

export const Dark = Template.bind({});
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
