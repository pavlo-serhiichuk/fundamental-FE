import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CommentList} from './CommentList';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
 comments: [
   {id: '1', text: 'text comment', user: {username: 'User', id: '1'}},
   {id: '2', text: 'text comment 2', user: {username: 'User', id: '2'}}
 ]
};

Primary.decorators = [StoreDecorator({})]

export const isLoading = Template.bind({});

isLoading.args = {
 comments: [],
  isLoading: true
};

isLoading.decorators = [StoreDecorator({})]
