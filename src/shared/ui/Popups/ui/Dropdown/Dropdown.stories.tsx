import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Dropdown} from './Dropdown';
import {Button} from 'shared/ui/Button/Button'

export default {
  title: 'shared/Popups/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  trigger: <Button>Menu</Button>,
  items: [
    {
      content: <>menu item 1</>,
    },
    {
      content: <>menu item 2</>,
      disabled: true
    },
    {
      content: <>menu item 3</>,
    },
  ]
};