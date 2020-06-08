import React from 'react'
import { Container, Icon, Input } from 'module/login/Input'

function LoginInputComponent(props) {
  const { icon } = props

  return (
    <Container>
      <Icon>{icon()}</Icon>
      <Input {...props} />
    </Container>
  )
}

export default LoginInputComponent
