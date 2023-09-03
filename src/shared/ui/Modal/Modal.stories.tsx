import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@/app/styles/index.scss'
import {Modal} from '@/shared/ui/Modal/Modal'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from '@/shared/consts/theme'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Text text',
  isOpen: true
};

export const Dark = Template.bind({});

Dark.args = {
  children: 'Text text',
  isOpen: true
};

Dark.decorators = [ThemeDecorator(Theme.DARK)]
