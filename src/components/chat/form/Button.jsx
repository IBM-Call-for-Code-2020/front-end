import React from 'react'
import Button from 'modules/chat/form/Button'
import { MdSend } from 'react-icons/md'

function ChatFormButtonComponent(props) {
  return (
    <Button data-testid="button">
      <MdSend />
    </Button>
  )
}

export default ChatFormButtonComponent
