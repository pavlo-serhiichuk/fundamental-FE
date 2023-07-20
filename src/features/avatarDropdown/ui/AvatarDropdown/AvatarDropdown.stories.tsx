import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AvatarDropdown} from './AvatarDropdown';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'shared/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Primary = Template.bind({});

Primary.args = {};