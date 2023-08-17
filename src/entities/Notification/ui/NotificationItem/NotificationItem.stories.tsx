import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {NotificationItem} from './NotificationItem';

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
Primary.parameters = {}