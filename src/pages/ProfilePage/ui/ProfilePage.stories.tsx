import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {ProfilePage} from '../index'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

// @ts-ignore
const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({});
Dark.args = {}
//{profile: {data: {username: 'Pavlo', firstname: 'Pavlo', lastname: 'Serh'}}}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
