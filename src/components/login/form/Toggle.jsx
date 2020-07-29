import React, { useCallback } from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import { Toggle, Indicator } from 'modules/login/form/Toggle'

function LoginFormRememberComponent(props) {
  const { onToggle = () => {}, show = false } = props

  const onClick = useCallback(() => onToggle(!show), [onToggle, show])

  return (
    <Toggle onClick={onClick}>
      <Indicator active={show}>
        <IoMdCheckmark />
      </Indicator>
      Remember me
    </Toggle>
  )
}

export default React.memo(LoginFormRememberComponent)
