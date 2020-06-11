import React, { useCallback } from 'react'
import Chat from 'components/chat/bubble'
import Date from 'components/chat/Date'

function ChatListsContainer(props) {
  const { data = [], onClick = () => {} } = props

  const handleClick = useCallback((e) => {
    onClick(e)
  }, [])

  return (
    <div>
      <Date />
      {data.map((_i, i) => (
        <Chat key={Number(i)} data={_i} onClick={handleClick} />
      ))}
    </div>
  )
}

export default ChatListsContainer
