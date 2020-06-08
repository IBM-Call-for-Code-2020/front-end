import React, { useCallback } from 'react'
import { IoMdCheckmark } from 'react-icons/io'

function LoginFormRememberComponent(props) {
  const { onToggle = () => {}, show = false } = props

  const onClick = useCallback(() => onToggle(!show), [show])

  return (
    <div onClick={onClick}>
      <span>{show ? <IoMdCheckmark /> : ''}</span>
      Remember me
    </div>
  )
}

export default React.memo(LoginFormRememberComponent)
