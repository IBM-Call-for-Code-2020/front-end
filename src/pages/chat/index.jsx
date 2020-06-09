import React from 'react'
import Container from 'modules/chat'
import Chats from 'containers/chat/Chats'
import Form from 'containers/chat/Form'

function ChatPage() {
  return (
    <Container>
      <Chats />
      <Form />
    </Container>
  )
}

export default ChatPage
