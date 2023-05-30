import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Tabs} from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  tabs: [
    {
      content: "IT",
      value: 'IT'
    },
    {
      content: "ECONOMICS",
      value: 'ECONOMICS'
    },
    {
      content: "tab 3",
      value: 'tab 3'
    },
  ],
  value: 'ECONOMICS',
  onTabClick: action('onTabClick')
};