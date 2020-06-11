import React, { useEffect } from 'react'
import moment from 'moment'
import localization from 'moment/locale/ko'
import Date from 'modules/chat/Date'

function ChatDateComponent() {
  useEffect(() => {
    moment.updateLocale('ko', localization)
  }, [])

  return <Date>{moment().format('dddd ・ hh:mm a')}</Date>
}

export default ChatDateComponent
