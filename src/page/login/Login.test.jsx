import React from 'react'
import { render } from '@testing-library/react'
import Login from './index'

describe('<Login />', () => {
  it('match Login Text', () => {
    const text = render(<Login />)
    text.getByText(/Login/i)
  })
})
