import React, { useState } from 'react'
import Chat from 'components/chat/bubble'

function ChatListsContainer(props) {
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
    {
      chat: 'user',
      content: [
        {
          content: 'hell yeah fuck',
        },
      ],
    },
    {
      chat: 'bot',
      content: [
        {
          content:
            'Hi there! I am Carbon Kim, here to help with your carbon tax support. What can I help you with today?',
        },
        {
          content:
            'Hi there! I am Carbon Kim, here to help with your carbon tax support. What can I help you with today?',
        },
        {
          content:
            'Hi there! I am Carbon Kim, here to help with your carbon tax support. What can I help you with today?',
        },
      ],
    },
  ])

  return (
    <div>
      {data.map((_i, i) => (
        <Chat key={Number(i)} data={_i} />
      ))}
    </div>
  )
}

export default ChatListsContainer
