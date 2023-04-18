import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {ProfilePage} from '../index'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'

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

Primary.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 33,
      country: Country.Ukraine,
      lastname: 'Serh',
      firstname: 'Pavlo',
      city: 'Vii',
      currency: Currency.GRN,
    }
  }
})]

export const Dark = Template.bind({});
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 33,
      country: Country.Ukraine,
      lastname: 'Serh',
      firstname: 'Pavlo',
      city: 'Vii',
      currency: Currency.GRN,
    }
  }
})]
