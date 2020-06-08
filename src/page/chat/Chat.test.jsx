import React from 'react'
import { render } from '@testing-library/react'
import Chat from './index'

describe('<Chat />', () => {
  it('match Chat Text', () => {
    const text = render(<Chat />)
    text.getByText(/Chat/i)
  })
})
