import styled from 'styled-components'

const ChatFormContainerModule = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: calc(100% - 26px);
  border-radius: 500px;
  margin: 0 13px 13px 13px;
  border-style: solid;
  border-width: 2px;
  border-image-source: linear-gradient(to top, #aaffa9, #11ffbd);
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, #ffffff, #ffffff),
    linear-gradient(to top, #aaffa9, #11ffbd);
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export default ChatFormContainerModule
