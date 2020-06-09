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

  div {
    padding: 11px 14px;
  }
`

export default ChatBubbleBotModule
