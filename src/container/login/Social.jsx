import React, { useCallback } from 'react'

function LoginSocialContainer(props) {
  const { onLogin = () => {} } = props

  const onClick = useCallback(
    (e) => {
      onLogin({
        method: e,
      })
    },
    [onLogin],
  )

  return (
    <div>
      <span>Or login with</span>

      <div onClick={() => onClick('naver')}>
        <img src="https://placekitten.com/50/50" alt="naver logo" />
        <span>login with naver</span>
      </div>

      <div onClick={() => onClick('google')}>
        <img src="https://placekitten.com/50/50" alt="google logo" />
        <span>login with google</span>
      </div>

      <div onClick={() => onClick('kakao')}>
        <img src="https://placekitten.com/50/50" alt="kakao logo" />
        <span>login with kakao</span>
      </div>
    </div>
  )
}

export default LoginSocialContainer
