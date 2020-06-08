import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Form from 'container/login/Form'

describe('Form', () => {
  const setup = (props = {}) => {
    const utils = render(<Form {...props} />)
    const { getByText, getByPlaceholderText, getByLabelText } = utils
    const email = getByPlaceholderText('Email')
    const password = getByPlaceholderText('Password')
    const remember = getByLabelText('Remember me')
    const button = getByText('Login')
    return {
      ...utils,
      email,
      password,
      remember,
      button,
    }
  }

  it('should render correctly', () => {
    const { email, password, remember, button } = setup()
    expect(email).toBeTruthy()
    expect(password).toBeTruthy()
    expect(remember).toBeTruthy()
    expect(button).toBeTruthy()
  })

  it('changes email', () => {
    const { email } = setup()
    fireEvent.change(email, {
      target: {
        value: 'pinot.kim@kakao.com',
      },
    })
    expect(email).toHaveAttribute('value', 'pinot.kim@kakao.com')
  })

  it('changes password', () => {
    const { password } = setup()
    fireEvent.change(password, {
      target: {
        value: 'password',
      },
    })
    expect(password).toHaveAttribute('value', 'password')
  })

  it('calls onLogin and clears inputs', () => {
    const onLogin = jest.fn()
    const { email, password, button } = setup({ onLogin })

    fireEvent.change(email, {
      target: {
        value: 'pinot.kim@kakao.com',
      },
    })

    fireEvent.change(password, {
      target: {
        value: 'password',
      },
    })

    fireEvent.click(button)

    expect(onLogin).toBeCalledWith({
      email: 'pinot.kim@kakao.com',
      password: 'password',
    })

    expect(email).toHaveAttribute('value', '')
    expect(password).toHaveAttribute('value', '')
  })
})
