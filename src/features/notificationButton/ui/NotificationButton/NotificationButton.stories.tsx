import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {NotificationButton} from './NotificationButton';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'shared/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {};