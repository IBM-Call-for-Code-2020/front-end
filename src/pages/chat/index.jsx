import React, { useCallback, useState } from 'react'
import Container from 'modules/chat'
import Chats from 'containers/chat/Chats'
import Form from 'containers/chat/Form'

function ChatPage() {
  const [data, setData] = useState([
    {
      chat: 'bot',
      content: [
        {
          content:
            'Hi there! I am Carbon Kim, here to help with your carbon tax support.',
        },
        {
          content: 'What can I help you with today?',
        },
      ],
    },
  ])

  const onSubmit = useCallback(
    (e) => {
      setData([...data, e])
    },
    [data],
  )

  return (
    <Container>
      <Chats data={data} />
      <Form onSubmit={onSubmit} />
    </Container>
  )
}

export default ChatPage
