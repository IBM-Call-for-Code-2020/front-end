import React, { useCallback, useState } from 'react'
import { MdMail, MdLock } from 'react-icons/md'
import Input from 'component/login/Input'
import Form from 'module/login'

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
    <Form onSubmit={onSubmit}>
      <Input
        type="email"
        placeholder="Email"
        value={loginFrmData.email}
        onChange={onChange}
        required
        icon={MdMail}
      />
      <Input
        type="password"
        placeholder="Password"
        value={loginFrmData.password}
        onChange={onChange}
        required
        icon={MdLock}
      />

      <div>Remember me</div>

      <button type="submit">Login</button>
    </Form>
  )
}

export default LoginFormContainer
