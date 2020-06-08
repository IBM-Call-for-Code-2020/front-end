import React from 'react'
import { render } from '@testing-library/react'
import Home from './index'

describe('<Home />', () => {
  it('match Home Text', () => {
    const text = render(<Home />)
    text.getByText(/Home/i)
  })
})
