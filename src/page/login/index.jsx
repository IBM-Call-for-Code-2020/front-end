import React, { useCallback, useState } from 'react'

function LoginPage() {
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
      setLoginFrmData(inital)
    },
    [inital],
  )

  return (
    <div>
      <div>
        <img src="https://placekitten.com/500/500" alt="chat-bot logo" />
      </div>

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

        <label htmlFor="rember-me">Remeber me</label>
        <input type="checkbox" id="rember-me" name="rember-me" />

        <button type="submit">Login</button>
      </form>

      <div>
        <span>Or login with</span>

        <div>
          <img src="https://placekitten.com/50/50" alt="naver logo" />
          <span>login with naver</span>
        </div>

        <div>
          <img src="https://placekitten.com/50/50" alt="google logo" />
          <span>login with google</span>
        </div>

        <div>
          <img src="https://placekitten.com/50/50" alt="kakao logo" />
          <span>login with kakao</span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
