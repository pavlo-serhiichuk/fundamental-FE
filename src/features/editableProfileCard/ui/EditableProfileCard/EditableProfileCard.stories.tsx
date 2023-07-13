import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {EditableProfileCard} from './EditableProfileCard';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

Primary.decorators = [StoreDecorator({})]