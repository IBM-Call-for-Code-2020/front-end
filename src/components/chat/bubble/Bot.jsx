import React from 'react'
import Bubble from 'modules/chat/bubble/Bot'
import { Content } from 'modules/chat/bubble'

function ChatBubbleBotComponent(props) {
  const { children = '' } = props

  return (
    <Bubble>
      <Content>{children}</Content>
    </Bubble>
  )
}

export default ChatBubbleBotComponent
