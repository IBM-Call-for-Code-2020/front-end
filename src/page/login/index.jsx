import React, { useCallback } from 'react'
import Logo from 'component/login/Logo'
import Form from 'container/login/Form'
import Social from 'container/login/Social'

function LoginPage() {
  const onLogin = useCallback((e) => {
    console.log(e)
  }, [])

  return (
    <div>
      <Logo />
      <Form onLogin={onLogin} />
      <Social />
    </div>
  )
}

export default LoginPage
