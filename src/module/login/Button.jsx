import styled from 'styled-components'

const LoginFormButtonModule = styled.button`
  background-image: linear-gradient(to top, #aaffa9, #11ffbd);
  border: none;
  padding: 15px;
  width: 100%;
  border-radius: 50px;
  font-size: 1em;
  color: #bfbfbf;
  font-weight: 900;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fed665;
  }
`

export default LoginFormButtonModule
