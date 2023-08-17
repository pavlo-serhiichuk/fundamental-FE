import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ProfileRating} from './ProfileRating';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'

export default {
  title: 'features/ProfileRating',
  component: ProfileRating,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [
    StoreDecorator({user: {authData: {id: '1'}}}), withMock]
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  profileId: '1'
};

Primary.parameters = {
  mockData: [
    {
      url:  __API__ + '/profiles-ratings?&userId=1&profileId=1',
      method: '',
      status: 200,
      response : [
        {rate: 2}
      ]
    }
  ]
};
