import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ArticleRecommendationsList} from './ArticleRecommendationsList';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const mockArticle = {
  id: '1',
  image: '',
  createAt: '',
  views: 123,
  user: {id: '1', username: 'admin'},
  blocks: [],
  type: [],
  title: '123',
  subtitle: 'subtitle'
}

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

Primary.decorators = [StoreDecorator({})]

Primary.parameters = {
  mockData: [
    {
      url: __API__ + '/articles?_limit=4',
      method: '',
      status: 200,
      response : [
        {...mockArticle, id: '1'},
        {...mockArticle, id: '2'},
        {...mockArticle, id: '3'},
        {...mockArticle, id: '4'},
      ]
    }
  ]
}