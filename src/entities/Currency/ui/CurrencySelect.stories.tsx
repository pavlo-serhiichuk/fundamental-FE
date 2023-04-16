import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {CurrencySelect} from 'entities/Currency'

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = () => <CurrencySelect />;

export const Primary = Template.bind({
  value: 'Value'
});

Primary.args = {};