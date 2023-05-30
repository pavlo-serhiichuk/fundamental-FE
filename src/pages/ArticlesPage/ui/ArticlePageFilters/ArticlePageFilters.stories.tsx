import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ArticlePageFilters} from './ArticlePageFilters';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/ArticlesPage/ArticlePageFilters',
  component: ArticlePageFilters,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => <ArticlePageFilters {...args} />;

export const Filters = Template.bind({});

Filters.args = {};
Filters.decorators = [StoreDecorator({})]
