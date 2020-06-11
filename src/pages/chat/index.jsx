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
            '반가워요!\n 저는 탄소세 정보를 알려드리는 김탄소라고 해요!\n궁금한게 있으시다면 제게 물어보세요!',
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
