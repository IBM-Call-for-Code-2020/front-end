import React from 'react'
import Row from 'modules/chat/bubble/Row'
import Bubble from 'modules/chat/bubble/Bot'
import { Content } from 'modules/chat/bubble'
import Loading from 'modules/chat/bubble/Loading'

function ChatBubbleBotComponent(props) {
  const { children = '', loading = false } = props

  return (
    <Row>
      <Bubble loading={loading}>
        {!loading ? <Content>{children}</Content> : <Loading />}
      </Bubble>
    </Row>
  )
}

export default ChatBubbleBotComponent
