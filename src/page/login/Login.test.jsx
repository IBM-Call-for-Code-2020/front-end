import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from './index'

describe('<Login />', () => {
  it('render correctly', () => {
    const {
      getByAltText,
      getByPlaceholderText,
      getByText,
      getByLabelText,
    } = render(<Login />)
    getByAltText('chat-bot logo')
    getByPlaceholderText('Email')

    getByPlaceholderText('Password')

    getByLabelText('Remeber me')

    getByText('Login')

    getByText('Or login with')

    getByAltText('naver logo')
    getByText('login with naver')

    getByAltText('google logo')
    getByText('login with google')

    getByAltText('kakao logo')
    getByText('login with kakao')
  })

  it('change email', () => {
    const { getByPlaceholderText } = render(<Login />)
    const input = getByPlaceholderText('Email')

    fireEvent.change(input, {
      target: {
        value: 'pinot.kim@kakao.com',
      },
    })

    expect(input).toHaveAttribute('value', 'pinot.kim@kakao.com')
  })

  it('change password', () => {
    const { getByPlaceholderText } = render(<Login />)
    const input = getByPlaceholderText('Password')

    fireEvent.change(input, {
      target: {
        value: 'password',
      },
    })

    expect(input).toHaveAttribute('value', 'password')
  })

  it('submit and clear input', () => {
    const { getByPlaceholderText, getByText } = render(<Login />)
    const email = getByPlaceholderText('Email')
    const password = getByPlaceholderText('Password')
    const submit = getByText('Login')

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

    fireEvent.click(submit)
    expect(email).toHaveAttribute('value', '')
    expect(password).toHaveAttribute('value', '')
  })
})
