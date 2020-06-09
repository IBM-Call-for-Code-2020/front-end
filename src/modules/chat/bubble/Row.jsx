import styled from 'styled-components'

const ChatBubbleRowModule = styled.div`
  display: flex;
  justify-content: ${({ user }) => (user ? 'flex-end' : 'flex-start')};
  margin-bottom: 18px;
  padding: 0 20px;
`

export default ChatBubbleRowModule
