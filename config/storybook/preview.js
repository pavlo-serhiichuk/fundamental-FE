import {addDecorator} from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {RouteDecorator} from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator";
import {SuspenseDecorator} from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import {Theme} from '../../src/shared/consts/theme';

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'light',
        list: [
            {name: 'light', class: Theme.LIGHT, color: '#fff'},
            {name: 'dark', class: Theme.DARK, color: '#969696'},
            {name: 'blue', class: Theme.BLUE, color: '#e5f2ff'},
        ]
    }
}

addDecorator(StyleDecorator)
// addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouteDecorator)
addDecorator(SuspenseDecorator)
