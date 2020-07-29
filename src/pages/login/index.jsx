import React, { useCallback } from 'react'
import Container from 'modules/login'
import Logo from 'components/login/Logo'
import Form from 'containers/login/Form'
import Social from 'containers/login/Social'

function LoginPage() {
  const onLogin = useCallback(() => {
    window.location.href = '/chat'
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
