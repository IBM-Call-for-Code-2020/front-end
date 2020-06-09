import React from 'react'
import Bubble from 'modules/chat/bubble/User'
import { Content } from 'modules/chat/bubble'

function ChatBubbleUserComponent(props) {
  const { children = '' } = props

  return (
    <Bubble>
      <Content>{children}</Content>
    </Bubble>
  )
}

export default ChatBubbleUserComponent
