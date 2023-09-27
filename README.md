## Start the project
```
npm install - install dependencies
"npm run start:dev" or "npm run start:dev:vite" - start server + frontend apps
```

## Scripts
```
    "npm run start" - start project FE on webpack dev server
    "npm run start:vite" - start project FE on "vite" 
    "npm run start:dev" - start project FE on webpack dev server + server
    "npm run start:dev:vite" - start project FE on "vite"  + server
    "npm run start:dev:server" - start project BE
    "npm run build:prod" - build production
    "npm run build:dev" - build development(not minimuzed)
    "npm run lint:ts" - check ts files with linter
    "npm run lint:ts:fix" - fix ts files with linter
    "npm run lint:scss" - check scss files with linter
    "npm run lint:scss:fix" - fix scss files with linter
    "npm run test:unit" - run unit tests on jest
    "npm run test:ui" - run screenshot tests with loki
    "npm run test:ui:ok" - approve screenshot tests with loki
    "npm run test:ui:ci" - run screenshot tests with CI
    "npm run test:ui:report" - generate a full report for screenshot tests
    "npm run test:ui:json" - generate a json report for screenshot tests
    "npm run test:ui:html" - generate an html report for screenshot tests
    "npm run storybook" - run storybook
    "npm run storybook:build" - pile up storybook build 
    "npm run generate:slice" - generate FSD slices
```

## The project architecture
The project was developed according to Feature-Slice design
Documentation link - [Feature-Slice design](https://feature-sliced.design/)

## How translations work
Translations work on i18next lib.
Files with translations placed in "public/locales".

Documentation link - [i18next](https://www.i18next.com/)

## Start tests
There is 3 types of tests in project:
1. Regular unit tests on jest - `npm run test:unit`
2. Components tests with React testing library - `npm run test:unit`
3. Screenshot tests with loki `npm run test:ui`

More details about tests [here](/docs/tests.md)

## Linting & start linter 
The project use eslint for checking typescript and stylelint for checking style files.

 `npm run lint:ts` - check ts files with linter 
 `npm run lint:ts:fix` - fix ts files with linter
 `npm run lint:scss` - check scss files with linter
 `npm run lint:scss:fix` - fix scss files with linter
 
## Storybooks
There is a story-cases for an every component on a project.
Requests to server are mocked with `storybook-addon-mock`.

Files with storycases placed next to components with .stories.tsx extension

You can run storycases with `npm run storybook` command.

More details about [Storybook](https://storybook.js.org/).

Example:
```typescript jsx
import React from 'react';
import {ComponentStory, ComponentMeta, addDecorator} from '@storybook/react';
import {AppLink, AppLinkTheme} from '@/shared/ui/AppLink'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from '@/shared/consts/theme'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY
};
```

## The project configuration
There is two configurations for developing:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both bundlers are adapted to main features of the application.

All configurations are in /config folder

- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - testing env configuration
- /config/storybook - storybook configuration

`scrips` folder contains different scripts for code refactoring/simplifying & reports generating etc.

## Work with data

Work with data build on `redux toolkit`. Better to normalize reusable entities with EntityAdapter.

[RTK Query](https://redux-toolkit.js.org/rtk-query/overview) is used to requests to server.

For async reducers connecting(avoid them in common bundle) uses [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

## Project layers:
## Entities
 - [Article](/src/entities/Article)
 - [Comment](/src/entities/Comment)
 - [Counter](/src/entities/Counter)
 - [Country](/src/entities/Country)
 - [Currency](/src/entities/Currency)
 - [Notification](/src/entities/Notification)
 - [Profile](/src/entities/Profile)
 - [Rating](/src/entities/Rating)
 - [User](/src/entities/User)

## Features
- [addCommentForm](/src/features/addCommentForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UIDetector](/src/features/UIDetector)

----
## Feature flags

Feature flags available only with helpers "toggleFeatures"

"toggleFeatures" takes as a param an object with next fields:
{
 name: feature flag name,
 on: a function, that works after the feature turn ON 
 off: a function, that works after the feature turn OFF 
}

### For automatic feature removing you should use remove-feature.js script.

To run: npx ts-node ./scripts/remove-feature.ts <REQUIRED_FEATURE_NAME REQUIRED_FEATURE_STATE>

Required params:
1. REQUIRED_FEATURE_NAME - the feature name
2. REQUIRED_FEATURE_STATE - the feature state (on/off)

----