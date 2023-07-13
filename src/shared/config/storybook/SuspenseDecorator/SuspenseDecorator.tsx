import {Story} from '@storybook/react'
import {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'

export const SuspenseDecorator = (StoryComponent: Story) => (
  <Suspense>
    <StoryComponent />
  </Suspense>
)