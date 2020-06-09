import React from 'react'
import Row from 'modules/chat/bubble/Row'
import Bubble from 'modules/chat/bubble/User'
import { Content } from 'modules/chat/bubble'

function ChatBubbleUserComponent(props) {
  const { children = '' } = props

  return (
    <Row user>
      <Bubble>
        <Content>{children}</Content>
      </Bubble>
    </Row>
  )
}

export default ChatBubbleUserComponent
