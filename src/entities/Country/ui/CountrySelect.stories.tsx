import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {CountrySelect} from '@/entities/Country'

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = () => <CountrySelect />;

export const Primary = Template.bind({
  value: 'Value'
});

Primary.args = {};