import React, { useCallback } from 'react'
import Container from 'module/login'
import Logo from 'component/login/Logo'
import Form from 'container/login/Form'
import Social from 'container/login/Social'

function LoginPage() {
  const onLogin = useCallback((e) => {
    console.log(e)
  }, [])

  return (
    <Container>
      <Logo />
      <Form onLogin={onLogin} />
      <Social />
    </Container>
  )
}

export default LoginPage
