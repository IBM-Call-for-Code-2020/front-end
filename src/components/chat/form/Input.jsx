import React, { useCallback } from 'react'
import Input from 'modules/chat/form/Input'

function ChatFormInputComponent(props) {
  const { value, onChange, disabled } = props

  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value)
    },
    [onChange],
  )

  return (
    <Input
      type="text"
      placeholder="Add text to this message"
      value={value}
      onChange={handleChange}
      disabled={disabled}
    />
  )
}

export default ChatFormInputComponent
