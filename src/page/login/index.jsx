import React, { useCallback } from 'react'
import Logo from 'component/login/Logo'
import Form from 'container/login/Form'

function LoginPage() {
  const onLogin = useCallback((e) => {
    console.log(e)
  }, [])

  return (
    <div>
      <Logo />

      <Form onLogin={onLogin} />

      <div>
        <span>Or login with</span>

        <div>
          <img src="https://placekitten.com/50/50" alt="naver logo" />
          <span>login with naver</span>
        </div>

        <div>
          <img src="https://placekitten.com/50/50" alt="google logo" />
          <span>login with google</span>
        </div>

        <div>
          <img src="https://placekitten.com/50/50" alt="kakao logo" />
          <span>login with kakao</span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
