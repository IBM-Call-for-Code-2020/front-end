import React, { useCallback, useState } from 'react'

function LoginFormContainer(props) {
  const { onLogin = () => {} } = props

  const inital = {
    email: '',
    password: '',
  }

  const [loginFrmData, setLoginFrmData] = useState(inital)

  const onChange = useCallback(
    (e) => {
      setLoginFrmData({
        ...loginFrmData,
        [e.target.type]: e.target.value,
      })
    },
    [loginFrmData],
  )

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      onLogin(loginFrmData)
      setLoginFrmData(inital)
    },
    [inital],
  )

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={loginFrmData.email}
        onChange={onChange}
      />

      <input
        type="password"
        placeholder="Password"
        value={loginFrmData.password}
        onChange={onChange}
      />

      <label htmlFor="rember-me">
        Remember me <input type="checkbox" id="remember-me" name="rember-me" />
      </label>

      <button type="submit">Login</button>
    </form>
  )
}

export default LoginFormContainer
