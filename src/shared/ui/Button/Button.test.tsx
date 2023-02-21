import {render, screen} from '@testing-library/react'
import {Button} from 'shared/ui/Button/Button'

describe('classNames with', () => {
  test('first arg', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

})