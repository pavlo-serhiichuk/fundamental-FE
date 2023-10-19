import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesPageGreeting } from './ArticlesPageGreeting';

export default {
    title: 'features/ArticlesPageGreeting',
    component: ArticlesPageGreeting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageGreeting>;

const Template: ComponentStory<typeof ArticlesPageGreeting> = (args) => <ArticlesPageGreeting {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};