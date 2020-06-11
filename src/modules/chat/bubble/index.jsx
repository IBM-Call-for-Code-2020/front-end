import styled from 'styled-components'

const ChatContainerModule = styled.div`
  margin-bottom: 18px;
`

const ChatBubbleModule = styled.div`
  color: #363a44;
  width: fit-content;
  max-width: 220px;
  word-break: keep-all;
  white-space: pre-line;
`

const ChatBubbleContentModule = styled.div``

export {
  ChatContainerModule as Chat,
  ChatBubbleModule as Bubble,
  ChatBubbleContentModule as Content,
}
