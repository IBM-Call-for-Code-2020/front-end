import React, { useCallback } from 'react'
import { SocialLogo } from 'module/login/Logo'
import { Login } from 'module/login/Button'
import { Text } from 'module/login/Text'

function LoginSocialButtonComponent(props) {
  const {
    data = {
      name: '',
      logo: 'https://placekitten.com/50/50',
      color: {
        background: '#fff',
      },
    },
    onLogin = () => {},
  } = props
  const { name, logo, color } = data

  const onClick = useCallback(() => {
    onLogin(name)
  }, [name])

  return (
    <Login onClick={onClick} color={color}>
      <SocialLogo src={logo} alt={`${name} logo`} />
      <Text>login with {name}</Text>
    </Login>
  )
}

export default React.memo(LoginSocialButtonComponent)
