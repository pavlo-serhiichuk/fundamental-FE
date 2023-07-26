import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '@/app/styles/index.scss'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from '@/app/providers/ThemeProvider'
import {Navbar} from './Navbar'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const mockNotification = {
  id: '1',
  title: "Notification 1. From Anna",
  description: "Description for notification 1.",
  userId: "1"
}

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {}
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({});
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {}

AuthNavbar.decorators = [StoreDecorator({
  user: {authData: {}}
}), withMock]

AuthNavbar.parameters = {
  mockData: [
    {
      url: __API__ + '/notifications',
      method: '',
      status: 200,
      response : [
        {...mockNotification, id: '1'},
        {...mockNotification, id: '2'},
        {...mockNotification, id: '3'},
        {...mockNotification, id: '4'},
      ]
    }
  ]
}