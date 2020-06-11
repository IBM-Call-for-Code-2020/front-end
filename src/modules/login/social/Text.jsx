import styled from 'styled-components'

const LoginSocialInfoModule = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 25px;

  &:before,
  &:after {
    display: inline-block;
    width: fit-content;
    margin: 0 15px;
    content: 'ㅡㅡㅡㅡㅡㅡㅡㅡ';
    letter-spacing: -1.2px;
  }
`

const LoginSocialTextModule = styled.span``

export { LoginSocialInfoModule as Info, LoginSocialTextModule as Text }
