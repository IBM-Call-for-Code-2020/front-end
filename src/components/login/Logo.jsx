import React from 'react'
import Logo from 'modules/login/logo/Image'
import Container from 'modules/login/logo'

function LoginLogoComponent() {
  return (
    <Container>
      <Logo src="/static/logo.svg" alt="chat-bot logo" />
    </Container>
  )
}

export default LoginLogoComponent
