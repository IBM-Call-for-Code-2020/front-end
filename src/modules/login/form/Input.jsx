import styled from 'styled-components'

const LoginInputContainerModule = styled.div`
  display: flex;
  align-items: center;
  color: #909090;
  font-size: 20px;
  border: solid 2px #aaffa9;
  border-radius: 50px;
  border-image-slice: 1;
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin-bottom: 22px;
`

const LoginInputIconWrapperModule = styled.span`
  margin: 11px 40px;
`

const LoginInputModule = styled.input`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  margin-right: 40px;
`

export {
  LoginInputContainerModule as Container,
  LoginInputIconWrapperModule as Icon,
  LoginInputModule as Input,
}
