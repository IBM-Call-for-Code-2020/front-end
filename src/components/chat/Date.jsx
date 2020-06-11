import React, { useEffect } from 'react'
import moment from 'moment'
import localization from 'moment/locale/ko'

function ChatDateComponent() {
  useEffect(() => {
    moment.updateLocale('ko', localization)
  }, [])

  return <div>{moment().format('dddd ・ hh:mm a')}</div>
}

export default ChatDateComponent
