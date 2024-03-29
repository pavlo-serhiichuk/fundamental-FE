import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {NotificationItem} from './NotificationItem';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'


export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof NotificationItem>;


const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  item: {
    id: '1',
    userId: '1',
    title: 'Notification title' ,
    description: 'description'
  }
};
Primary.parameters = {}