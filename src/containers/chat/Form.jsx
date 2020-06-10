import React, { useCallback, useState } from 'react'
import Input from 'components/chat/form/Input'
import Button from 'components/chat/form/Button'

function ChatFormContainer(props) {
  const { onSubmit = () => {}, isLoading } = props
  const [userText, setUserText] = useState('')

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      onSubmit({
        chat: 'user',
        content: [
          {
            content: userText,
          },
        ],
      })
    },
    [userText],
  )

  const onChange = useCallback((e) => {
    setUserText(e)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Input value={userText} onChange={onChange} disabled={isLoading} />
      <Button />
    </form>
  )
}

export default ChatFormContainer
