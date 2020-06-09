import React, { useCallback } from 'react'
import SocialLogo from 'module/login/social/Logo'
import Button from 'module/login/social/Button'
import { Text } from 'module/login/social/Text'

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
    <Button onClick={onClick} color={color}>
      <SocialLogo src={logo} alt={`${name} logo`} />
      <Text>login with {name}</Text>
    </Button>
  )
}

export default React.memo(LoginSocialButtonComponent)
