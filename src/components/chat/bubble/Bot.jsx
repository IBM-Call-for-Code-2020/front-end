import React, { useEffect, useState } from 'react'
import Row from 'modules/chat/bubble/Row'
import Bubble from 'modules/chat/bubble/Bot'
import { Chat, Content } from 'modules/chat/bubble'
import Loading from 'modules/chat/bubble/Loading'
import Image from 'modules/chat/bubble/Image'
import { Buttons, Button } from 'modules/chat/bubble/Button'

function ChatBubbleBotComponent(props) {
  const {
    children = '',
    first = true,
    index = 0,
    response = [],
    onClick = () => {},
  } = props

  const [loadingStatus, setLoadingStatus] = useState(0)
  const [showBtn, setShowBtn] = useState(true)

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

  useEffect(() => {
    window.scrollTo(0, window.innerHeight)
  }, [loadingStatus])

  if (loadingStatus === 0) {
    return <div />
  }

  const handleClick = (e) => {
    onClick(e)
    setShowBtn(false)
  }

  return (
    <Chat>
      <Row>
        {first ? <Image src="/static/logo.svg" /> : ''}
        <Bubble loading={loadingStatus === 1 ? 'true' : null} first={first}>
          {loadingStatus === 2 ? <Content>{children} </Content> : <Loading />}

          {response.length && loadingStatus === 2 && showBtn ? (
            <Buttons>
              {response.map((_i, i) => (
                <Button onClick={() => handleClick(_i.text)} key={Number(i)}>
                  {_i.label}
                </Button>
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
