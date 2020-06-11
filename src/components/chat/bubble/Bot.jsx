import React, { useEffect, useState } from 'react'
import Row from 'modules/chat/bubble/Row'
import Bubble from 'modules/chat/bubble/Bot'
import { Chat, Content } from 'modules/chat/bubble'
import Loading from 'modules/chat/bubble/Loading'
import Image from 'modules/chat/bubble/Image'
import logo from 'static/logo.svg'
import { Buttons, Button } from 'modules/chat/bubble/Button'

function ChatBubbleBotComponent(props) {
  const { children = '', first = true, index = 0, response = [] } = props

  const [loadingStatus, setLoadingStatus] = useState(0)

  useEffect(() => {
    // 0
    if (!index) {
      setLoadingStatus(1)

      setTimeout(() => {
        setLoadingStatus(2)
      }, 1500)
      return
    }

    setTimeout(() => {
      setLoadingStatus(1)
    }, 1500 + 2300 * (index - 1))

    setTimeout(() => {
      setLoadingStatus(2)
    }, 1500 + 2000 * index)
  }, [index])

  if (loadingStatus === 0) {
    return <div />
  }

  console.log(response)

  return (
    <Chat>
      <Row>
        {first ? <Image src={logo} /> : ''}
        <Bubble loading={loadingStatus === 1 ? 'true' : null} first={first}>
          {loadingStatus === 2 ? <Content>{children} </Content> : <Loading />}

          {response.length && loadingStatus === 2 ? (
            <Buttons>
              {response.map((_i, i) => (
                <Button key={Number(i)}>{_i.label}</Button>
              ))}
            </Buttons>
          ) : (
            ''
          )}
        </Bubble>
      </Row>
    </Chat>
  )
}

export default ChatBubbleBotComponent
