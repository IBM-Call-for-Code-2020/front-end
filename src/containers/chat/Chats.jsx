import React from 'react'
import Bot from 'components/chat/bubble/Bot'
import User from 'components/chat/bubble/User'

function ChatListsContainer(props) {
  return (
    <div>
      <Bot>
        Hi there! I am Carbon Kim, here to help with your carbon tax support.
        What can I help you with today?
      </Bot>

      <User>Carbon tax?</User>

      <Bot>
        Hi there! I am Carbon Kim, here to help with your carbon tax support.
        What can I help you with today?
      </Bot>
    </div>
  )
}

export default ChatListsContainer
