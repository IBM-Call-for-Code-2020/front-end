import styled from 'styled-components'

const ChatBubbleButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChatBubbleButton = styled.button`
  border: none;
  border-radius: 50px;
  padding: 6px 30px;
  background: linear-gradient(to top, #aaffa9, #11ffbd);
  font-size: 15px;
  color: #363a44;

  &:not(:last-child) {
    margin-right: 15px;
  }
`

export { ChatBubbleButtonContainer as Buttons, ChatBubbleButton as Button }
