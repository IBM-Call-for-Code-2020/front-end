import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Social from 'container/login/Social'

describe('Social Login', () => {
  const setup = (props = {}) => {
    const social = render(<Social {...props} />)
    const { getByAltText, getByText } = social
    const text = getByText('Or login with')
    const naver = {
      logo: getByAltText('naver logo'),
      text: getByText('login with naver'),
    }
    const google = {
      logo: getByAltText('google logo'),
      text: getByText('login with google'),
    }
    const kakao = {
      logo: getByAltText('kakao logo'),
      text: getByText('login with kakao'),
    }

    return {
      ...social,
      text,
      naver,
      google,
      kakao,
    }
  }

  it('should render correctly', () => {
    const { text, naver, google, kakao } = setup()

    expect(text).toBeTruthy()
    expect(naver.logo).toBeTruthy()
    expect(naver.text).toBeTruthy()
    expect(google.logo).toBeTruthy()
    expect(google.text).toBeTruthy()
    expect(kakao.logo).toBeTruthy()
    expect(kakao.text).toBeTruthy()
  })

  it('naver login', () => {
    const onLogin = jest.fn()
    const { naver } = setup({ onLogin })

    fireEvent.click(naver.logo)
    expect(onLogin).toBeCalledWith({
      method: 'naver',
    })
  })

  it('google login', () => {
    const onLogin = jest.fn()
    const { google } = setup({ onLogin })

    fireEvent.click(google.logo)
    expect(onLogin).toBeCalledWith({
      method: 'google',
    })
  })

  it('kakao login', () => {
    const onLogin = jest.fn()
    const { kakao } = setup({ onLogin })

    fireEvent.click(kakao.logo)
    expect(onLogin).toBeCalledWith({
      method: 'kakao',
    })
  })
})
