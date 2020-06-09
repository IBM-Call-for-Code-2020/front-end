import styled from 'styled-components'

const LoginSocialButtonModule = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) => props.color.background};
  color: #fff;
  border: none;
  font-size: 17px;
  font-weight: 900;
  width: calc(100% - 30px);
  margin: 0 15px;
  padding: 10px 5px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`

export default LoginSocialButtonModule
