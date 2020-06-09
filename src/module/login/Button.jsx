import styled from 'styled-components'

const LoginFormButtonModule = styled.button`
  background-image: linear-gradient(to top, #aaffa9, #11ffbd);
  border: none;
  padding: 15px;
  width: 100%;
  border-radius: 50px;
  font-size: 1em;
  color: #fff;
  font-weight: 900;
  cursor: pointer;
  margin-bottom: 15px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fed665;
  }
`

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
  margin: 0 15px 15px 15px;
  padding: 10px 5px;
`

export { LoginFormButtonModule as Button, LoginSocialButtonModule as Login }
