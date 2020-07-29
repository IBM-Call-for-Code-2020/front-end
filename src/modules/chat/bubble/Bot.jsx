import styled from 'styled-components'
import { Bubble } from './index'

const ChatBubbleBotModule = styled(Bubble)`
  border: solid 1.5px #4cffb6;
  border-radius: 20px;

  &:only-child {
    margin-left: 45px;
  }

  margin-top: ${({ first }) => (first ? '20px' : 0)};

  ${({ loading }) =>
    loading &&
    `
    width : 100px;
    height: 40px;
   `}

  div:first-child {
    padding: 11px 14px !important;
  }

  div:last-child {
    padding: 0 14px 11px 14px;
  }
`

export default ChatBubbleBotModule
