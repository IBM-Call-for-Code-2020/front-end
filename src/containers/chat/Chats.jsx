import React, { useState } from 'react'
import Bot from 'components/chat/bubble/Bot'
import User from 'components/chat/bubble/User'

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
        <div key={Number(i)}>
          {_i.chat === 'bot' ? (
            _i.content.map((_j, j) => (
              <Bot key={Number(j)} first={j === 0} index={j}>
                {_j.content}
              </Bot>
            ))
          ) : (
            <User>{_i.content[0].content}</User>
          )}
        </div>
      ))}
    </div>
  )
}

export default ChatListsContainer
