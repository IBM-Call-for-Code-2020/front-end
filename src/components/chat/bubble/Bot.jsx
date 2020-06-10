import React, { useEffect, useState } from 'react'
import Row from 'modules/chat/bubble/Row'
import Bubble from 'modules/chat/bubble/Bot'
import { Content } from 'modules/chat/bubble'
import Loading from 'modules/chat/bubble/Loading'
import Image from 'modules/chat/bubble/Image'
import logo from 'static/logo.svg'

function ChatBubbleBotComponent(props) {
  const { children = '', first = true, index = 0 } = props

  const [loadingStatus, setLoadingStatus] = useState(0)

  useEffect(() => {
    // 0
    if (!index) {
      setLoadingStatus(2)
      return
    }

    setTimeout(() => {
      setLoadingStatus(1)
    }, 2300 * (index - 1))

    setTimeout(() => {
      setLoadingStatus(2)
    }, 2000 * index)
  }, [index])

  if (loadingStatus === 0) {
    return <div />
  }

  return (
    <Row>
      {first ? <Image src={logo} /> : ''}
      <Bubble loading={loadingStatus === 1} first={first}>
        {loadingStatus === 2 ? <Content>{children}</Content> : <Loading />}
      </Bubble>
    </Row>
  )
}

export default ChatBubbleBotComponent
