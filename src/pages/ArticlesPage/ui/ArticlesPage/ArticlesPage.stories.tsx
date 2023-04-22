import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import ArticlesPage from './ArticlesPage';

export default {
  title: 'shared/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof ArticlesPage>;

// @ts-ignore
const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Primary = Template.bind({});

Primary.args = {};