import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Avatar} from 'shared/ui/Avatar/Avatar'
import AvatarImg from './avatar.jpeg'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 100,
  alt: 'gag',
  src: AvatarImg
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  alt: 'gag',
  src: AvatarImg
};