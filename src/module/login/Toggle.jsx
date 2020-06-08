import styled from 'styled-components'

const LoginFormToggleModule = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;
  cursor: pointer;
  color: #8c8c8c;
`

const LoginFormIndicatorModule = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: ${({ active }) => (active ? 'white' : '#8c8c8c')};
  border: solid 1.25px ${({ active }) => (active ? 'transparent' : '#8c8c8c')};
  background-image: ${({ active }) =>
    active ? 'linear-gradient(to top, #aaffa9, #11ffbd)' : 'white'};
`

export {
  LoginFormToggleModule as Toggle,
  LoginFormIndicatorModule as Indicator,
}
