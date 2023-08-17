import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import ArticleRating from './ ArticleRating';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [withMock]
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => < ArticleRating {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  articleId: '1'
};

Primary.decorators = [StoreDecorator({
  user: {
    authData: {id: '1'}
  }
})]


Primary.parameters = {
  mockData: [
    {
      url: __API__ + '/articles-ratings?userId=1&articleId=2',
      method: '',
      status: 200,
      response : [
        {rate: 3}
      ]
    }
  ]
}

export const WithoutRate = Template.bind({});

WithoutRate.args = {
  articleId: '1'
};

WithoutRate.decorators = [StoreDecorator({
  user: {
    authData: {id: '1'}
  }
}), withMock]


WithoutRate.parameters = {
  mockData: [
    {
      url: __API__ + '/articles-ratings?userId=1&articleId=2',
      method: '',
      status: 200,
      response : []
    }
  ]
}