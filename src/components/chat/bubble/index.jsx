import React, { useCallback } from 'react'
import Bot from './Bot'
import User from './User'

function ChatContainer(props) {
  const { data, onClick = () => {} } = props
  const { chat = '', content = [{ content: '', response: [] }] } = data

  const handleClick = useCallback(
    (e) => {
      onClick(e)
    },
    [content],
  )

  return (
    <div>
      {chat === 'bot' ? (
        content.map((_j, j) => (
          <Bot
            key={Number(j)}
            first={j === 0}
            index={j}
            response={content[0].response}
            onClick={handleClick}
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
