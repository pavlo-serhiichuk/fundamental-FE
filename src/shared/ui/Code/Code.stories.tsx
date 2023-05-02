import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Code} from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: '<!doctype html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <meta name="viewport"\n' +
    '          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
    '    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n' +
    '    <title>Document</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '<div id="root"></div>\n' +
    '</body>\n' +
    '</html>'
};