import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CommentItem} from './CommentItem';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/Comment/CommentItem',
  component: CommentItem,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  isLoading: false,
  comment: {id: '1', user: {id: '1', username: 'username'}, text: 'comment text.'}
};

Primary.decorators = [StoreDecorator({})]

export const isLoading = Template.bind({});

isLoading.args = {
  isLoading: true,
  comment: {id: '1', user: {id: '1', username: 'username'}, text: 'comment text.'}
};

isLoading.decorators = [StoreDecorator({})]
