import React from 'react'
import Row from 'modules/chat/bubble/Row'
import Bubble from 'modules/chat/bubble/Bot'
import { Content } from 'modules/chat/bubble'
import Loading from 'modules/chat/bubble/Loading'
import Image from 'modules/chat/bubble/Image'
import logo from 'static/logo.svg'

function ChatBubbleBotComponent(props) {
  const { children = '', loading = false, first = true } = props

  return (
    <Row>
      {first ? <Image src={logo} /> : ''}
      <Bubble loading={loading} first={first}>
        {!loading ? <Content>{children}</Content> : <Loading />}
      </Bubble>
    </Row>
  )
}

export default ChatBubbleBotComponent
