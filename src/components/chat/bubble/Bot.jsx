import React from 'react'
import Row from 'modules/chat/bubble/Row'
import Bubble from 'modules/chat/bubble/Bot'
import { Content } from 'modules/chat/bubble'

function ChatBubbleBotComponent(props) {
  const { children = '' } = props

  return (
    <Row>
      <Bubble>
        <Content>{children}</Content>
      </Bubble>
    </Row>
  )
}

export default ChatBubbleBotComponent
