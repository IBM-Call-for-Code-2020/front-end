import styled from 'styled-components'

const ChatBubbleLoading = styled.span`
  display: block;
  position: relative;
  width: 12px;
  height: 12px;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  animation: loader10m 2s ease-in-out infinite;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }

  &:before {
    left: -24px;
    animation: loader10g 2s ease-in-out infinite;
  }

  &:after {
    left: 24px;
    animation: loader10d 2s ease-in-out infinite;
  }

  @keyframes loader10g {
    0% {
      background-color: rgba(0, 0, 0, 0.2);
    }
    25% {
      background-color: rgba(0, 0, 0, 1);
    }
    50% {
      background-color: rgba(0, 0, 0, 0.2);
    }
    75% {
      background-color: rgba(0, 0, 0, 0.2);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  @keyframes loader10m {
    0% {
      background-color: rgba(0, 0, 0, 0.2);
    }
    25% {
      background-color: rgba(0, 0, 0, 0.2);
    }
    50% {
      background-color: rgba(0, 0, 0, 1);
    }
    75% {
      background-color: rgba(0, 0, 0, 0.2);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  @keyframes loader10d {
    0% {
      background-color: rgba(0, 0, 0, 0.2);
    }
    25% {
      background-color: rgba(0, 0, 0, 0.2);
    }
    50% {
      background-color: rgba(0, 0, 0, 0.2);
    }
    75% {
      background-color: rgba(0, 0, 0, 1);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`

export default ChatBubbleLoading
