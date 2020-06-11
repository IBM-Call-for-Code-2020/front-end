import React from 'react'
import Bot from './Bot'
import User from './User'

function ChatContainer(props) {
  const { data } = props
  const { chat = '', content = [{ content: '', response: [] }] } = data

  return (
    <div>
      {chat === 'bot' ? (
        content.map((_j, j) => (
          <Bot
            key={Number(j)}
            first={j === 0}
            index={j}
            response={content[0].response}
          >
            {_j.content}
          </Bot>
        ))
      ) : (
        <User>{content[0].content}</User>
      )}
    </div>
  )
}

export default React.memo(ChatContainer)
