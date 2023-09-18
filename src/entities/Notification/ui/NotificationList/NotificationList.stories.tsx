import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'
import {NotificationList} from './NotificationList'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

Primary.parameters = {
  mockData: [
    {
      url: __API__ + '/notifications',
      method: '',
      status: 200,
      response : [
        {id: '1', title: 'title 1', description: 'description 1', userId: '2'},
        {id: '1', title: 'title 2', description: 'description 2', userId: '2'},
        {id: '1', title: 'title 3', description: 'description 3', userId: '2'},
      ],
      delay: 2000
    }
  ]
};