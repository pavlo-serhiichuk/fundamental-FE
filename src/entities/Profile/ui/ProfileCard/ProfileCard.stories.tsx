import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import '@/app/styles/index.scss'
import {ProfileCard} from './ProfileCard'
import {Country} from '@/entities/Country'
import {Currency} from '@/entities/Currency'
import avatar from '@/shared/assets/test/programmer.jpeg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: {
    username: 'admin',
    age: 33,
    country: Country.Ukraine,
    lastname: 'Serh',
    firstname: 'Pavlo',
    city: 'Vii',
    currency: Currency.GRN,
    avatar: avatar
  }
}

export const withError = Template.bind({})
withError.args = {
  error: 'true'
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}