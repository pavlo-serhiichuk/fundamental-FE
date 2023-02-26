import 'app/styles/index.scss'
import {Story} from '@storybook/react'
import {Theme} from 'app/providers/ThemeProvider'
import { Suspense } from 'react'

export const SuspenseDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <Suspense fallback={'loading...'}>
    <StoryComponent />
  </Suspense>
)