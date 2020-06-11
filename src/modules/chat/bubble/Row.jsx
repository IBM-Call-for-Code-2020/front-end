import styled from 'styled-components'

const ChatBubbleRowModule = styled.div`
  display: flex;
  justify-content: ${({ user }) => (user ? 'flex-end' : 'flex-start')};
  padding: 0 20px;

  &:not(:only-child) {
    margin-bottom: 10px;
  }
`

export default ChatBubbleRowModule
