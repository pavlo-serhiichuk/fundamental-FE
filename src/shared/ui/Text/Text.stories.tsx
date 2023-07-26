import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import '@/app/styles/index.scss'
import {Text, TextSize, TextTheme} from './Text'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from '@/app/providers/ThemeProvider'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Title title title 123",
  text: "Text text text 123. Text text text 123. Text text text 123. Text text text 123. ",
};

export const onlyTitle = Template.bind({});

onlyTitle.args = {
  title: "Title title title 123",
};

export const onlyText = Template.bind({});

onlyText.args = {
  text: "Text text text 123. Text text text 123. Text text text 123. Text text text 123. ",
};


export const TextError = Template.bind({});

TextError.args = {
  title: "Title title title 123",
  text: "Text text text 123. Text text text 123. Text text text 123. Text text text 123. ",
  theme: TextTheme.ERROR
};


export const TextDark = Template.bind({});

TextDark.args = {
  title: "Title title title 123",
  text: "Text text text 123. Text text text 123. Text text text 123. Text text text 123. ",
};

TextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({});

SizeL.args = {
  title: "Title title title 123",
  text: "Text text text 123. Text text text 123. Text text text 123. Text text text 123. ",
  size: TextSize.L
};

export const SizeM = Template.bind({});

SizeM.args = {
  title: "Title title title 123",
  text: "Text text text 123. Text text text 123. Text text text 123. Text text text 123. ",
  size: TextSize.M
};

export const SizeS = Template.bind({});

SizeS.args = {
  title: "Title title title 123",
  text: "Text text text 123. Text text text 123. Text text text 123. Text text text 123. ",
  size: TextSize.S
};