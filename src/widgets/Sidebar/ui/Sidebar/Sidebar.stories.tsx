import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '@/app/styles/index.scss'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Sidebar} from './Sidebar'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import {Theme} from '@/shared/consts/theme'

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {}

Primary.decorators = [StoreDecorator({
  user: {authData: {}}
})]


export const Dark = Template.bind({});
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {authData: {}}
})]

export const NoAuth = Template.bind({});
NoAuth.args = {}

NoAuth.decorators = [StoreDecorator({}), StoreDecorator({
  user: {}
})]
