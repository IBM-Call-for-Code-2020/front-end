import styled from 'styled-components'

const ChatBubbleModule = styled.div`
  color: #363a44;
  width: fit-content;
  max-width: 220px;
  word-break: keep-all;

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`

const ChatBubbleContentModule = styled.div``

export { ChatBubbleModule as Bubble, ChatBubbleContentModule as Content }
