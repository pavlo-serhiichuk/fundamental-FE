import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss'
import {LoginForm} from './LoginForm'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});

Primary.decorators = [StoreDecorator({loginForm: {username: 'username', password: 'Q1Rdf2@3'}})]