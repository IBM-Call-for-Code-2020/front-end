import styled from 'styled-components'

const LoginInputContainerModule = styled.div`
  display: flex;
  align-items: center;
  color: #909090;
  font-size: 20px;
  border: solid 2px;
  border-radius: 50px;
  border-image-source: linear-gradient(to top, #aaffa9, #11ffbd);
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, #ffffff, #ffffff),
    linear-gradient(to top, #aaffa9, #11ffbd);
  background-origin: border-box;
  background-clip: content-box, border-box;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`

const LoginIconContainerModule = styled.span`
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
  LoginIconContainerModule as Icon,
  LoginInputModule as Input,
}
