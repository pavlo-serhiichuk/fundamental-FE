import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Popover} from './Popover';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import {Button} from '@/shared/ui/Button/Button'

export default {
  title: 'shared/Popups/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  trigger: <Button>trigger</Button>,
  direction: 'bottom right',
  children: <div>children</div>
};