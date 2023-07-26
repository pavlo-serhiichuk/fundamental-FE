import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof ArticlesPage>;

// @ts-ignore
const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Primary = Template.bind({});

Primary.args = {

};
Primary.decorators = [StoreDecorator({})];