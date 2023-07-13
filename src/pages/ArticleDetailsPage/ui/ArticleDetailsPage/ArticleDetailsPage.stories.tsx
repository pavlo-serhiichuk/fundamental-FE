import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

Primary.decorators = [StoreDecorator({})]