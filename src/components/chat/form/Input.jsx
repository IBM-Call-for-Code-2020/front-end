import React, { useCallback } from 'react'

function ChatFormInputComponent(props) {
  const { value, onChange, disabled } = props

  const handleChange = useCallback((e) => {
    onChange(e.target.value)
  }, [])

  return (
    <input
      type="text"
      placeholder="Add text to this message"
      value={value}
      onChange={handleChange}
      disabled={disabled}
    />
  )
}

export default ChatFormInputComponent
