import React from 'react'
import { render } from '@testing-library/react'
import Loading from './index'

describe('<Loading />', () => {
  it('match Loading Text', () => {
    const text = render(<Loading />)
    text.getByText(/Loading/i)
  })
})
