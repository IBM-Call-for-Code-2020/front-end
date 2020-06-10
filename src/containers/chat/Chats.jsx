import React from 'react'
import Chat from 'components/chat/bubble'

function ChatListsContainer(props) {
  const { data = [] } = props

  return (
    <div>
      {data.map((_i, i) => (
        <Chat key={Number(i)} data={_i} />
      ))}
    </div>
  )
}

export default ChatListsContainer
