import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {NotificationButton} from './NotificationButton';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [StoreDecorator({}), withMock]
} as ComponentMeta<typeof NotificationButton>;

const mockNotification = {
  id: '1',
  title: "Notification 1. From Anna",
  description: "Description for notification 1.",
  userId: "1"
}

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

Primary.parameters = {
  mockData: [
    {
      url: __API__ + '/notifications',
      method: '',
      status: 200,
      response : [
        {...mockNotification, id: '1'},
        {...mockNotification, id: '2'},
        {...mockNotification, id: '3'},
        {...mockNotification, id: '4'},
      ]
    }
  ]
}