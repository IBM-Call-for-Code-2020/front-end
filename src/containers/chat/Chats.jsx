import React, { useCallback } from 'react'
import Chat from 'components/chat/bubble'

function ChatListsContainer(props) {
  const { data = [], onClick = () => {} } = props

  const handleClick = useCallback((e) => {
    onClick(e)
  }, [])

  return (
    <div>
      {data.map((_i, i) => (
        <Chat key={Number(i)} data={_i} onClick={handleClick} />
      ))}
    </div>
  )
}

export default ChatListsContainer
