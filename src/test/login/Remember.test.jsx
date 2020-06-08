import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Remember from 'component/login/Remember'

describe('Remember Me Button', () => {
  const setup = (props = {}) => {
    const utils = render(<Remember {...props} />)
    const { getByText } = utils
    const remember = getByText('Remember me')
    return {
      ...utils,
      remember,
    }
  }

  it('should render correctly', () => {
    const { remember } = setup()
    expect(remember).toBeTruthy()
  })

  it('active remember', () => {
    const onToggle = jest.fn()
    const { remember } = setup({ onToggle })

    fireEvent.click(remember)
    expect(onToggle).toBeCalledWith(true)
  })

  it('disable remember', () => {
    const onToggle = jest.fn()
    const { remember } = setup({ onToggle, show: true })

    fireEvent.click(remember)
    expect(onToggle).toBeCalledWith(false)
  })
})
