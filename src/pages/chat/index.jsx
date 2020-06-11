import React, { useCallback, useState } from 'react'
import Container from 'modules/chat'
import axios from 'axios'
import identifyChat from 'lib/identifyChat'
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

  const addChat = useCallback(
    (chat) => setData((prevState) => [...prevState, chat]),
    [data],
  )

  const getData = (text) => {
    addChat({
      chat: 'user',
      content: [
        {
          content: text,
        },
      ],
    })

    axios
      .get(`/callNLP?question=${text}`, { timeout: 10000 })
      .then((res) => addChat(identifyChat(res.data.output)))
    // TODO : 에러 핸들러 만들기
  }

  const onSubmit = (e) => {
    getData(e)
  }
  const onClick = (e) => {
    getData(e)
  }

  return (
    <Container>
      <Chats data={data} onClick={onClick} />
      <Form onSubmit={onSubmit} />
    </Container>
  )
}

export default ChatPage
