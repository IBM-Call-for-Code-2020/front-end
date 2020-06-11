import styled from 'styled-components'
import { Bubble } from './index'

const ChatBubbleBotModule = styled(Bubble)`
  border-radius: 20px;
  border-style: solid;
  border-width: 1.5px;
  border-image-source: linear-gradient(to top, #aaffa9, #11ffbd);
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, #ffffff, #ffffff),
    linear-gradient(to top, #aaffa9, #11ffbd);
  background-origin: border-box;
  background-clip: content-box, border-box;

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
