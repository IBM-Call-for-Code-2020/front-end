import React from 'react'
import Logo from 'modules/login/logo/Image'
import Container from 'modules/login/logo'
import logo from 'static/logo.svg'

function LoginLogoComponent() {
  return (
    <Container>
      <Logo src={logo} alt="chat-bot logo" />
    </Container>
  )
}

export default LoginLogoComponent
