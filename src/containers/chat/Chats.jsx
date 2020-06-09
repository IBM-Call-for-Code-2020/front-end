import React from 'react'
import Bot from 'components/chat/bubble/Bot'
import User from 'components/chat/bubble/User'

const data = [
  {
    chat: 'bot',
    content: [
      {
        content:
          'Hi there! I am Carbon Kim, here to help with your carbon tax support.',
        loading: false,
      },
      {
        content: 'What can I help you with today?',
        loading: false,
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
        loading: false,
      },
      {
        content: 'lorem ipsum',
        loading: true,
      },
    ],
  },
]

function ChatListsContainer(props) {
  return (
    <div>
      {data.map((_i, i) => (
        <div key={Number(i)}>
          {_i.chat === 'bot' ? (
            _i.content.map((_j, j) => (
              <Bot key={Number(j)} loading={_j.loading} first={j === 0}>
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
