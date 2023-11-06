import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Button, ButtonSize, ButtonTheme} from './Button';
import '@/app/styles/index.scss'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from '@/shared/consts/theme'
import withMock from 'storybook-addon-mock'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock, StoreDecorator({})]
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Text'

};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
  disabled: true,
  children: 'Disabled',
  theme: ButtonTheme.OUTLINE
};


export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Huge text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};


export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.M,
  square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.L,
  square: true,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.XL,
  square: true,
};