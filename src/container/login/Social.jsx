import React, { useCallback } from 'react'
import Button from 'component/login/Social'
import { Info } from 'module/login/Text'

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

  const data = [
    {
      name: 'naver',
      logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkRUxY9sWn5bdNgfhcNoRP-51d2V7Avln6kakXPYC2YESyVYZN&usqp=CAU',
      color: {
        background: '#03C73C',
      },
    },
    {
      name: 'google',
      logo:
        'https://www.freepngimg.com/thumb/google/67060-play-photos-search-google-account-png-file-hd.png',
      color: {
        background: '#4385F5',
      },
    },
    {
      name: 'kakao',
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/f/f2/Kakao_logo.jpg',
      color: {
        background: '#FAE300',
      },
    },
  ]

  return (
    <div>
      <Info>Or login with</Info>

      {data.map((_i, i) => (
        <Button onLogin={onClick} data={_i} key={Number(i)} />
      ))}
    </div>
  )
}

export default LoginSocialContainer
