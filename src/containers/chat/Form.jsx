import React, { useCallback, useState } from 'react'
import Input from 'components/chat/form/Input'
import Button from 'components/chat/form/Button'
import Form from 'modules/chat/form'

function ChatFormContainer(props) {
  const { onSubmit = () => {}, isLoading } = props
  const [userText, setUserText] = useState('')

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      onSubmit(userText)
      setUserText('')
    },
    [userText],
  )

  const onChange = useCallback((e) => {
    setUserText(e)
  }, [])

  return (
    <Form onSubmit={handleSubmit}>
      <Input value={userText} onChange={onChange} disabled={isLoading} />
      <Button />
    </Form>
  )
}

export default ChatFormContainer
