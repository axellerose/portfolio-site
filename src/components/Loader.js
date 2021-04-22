import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Bg = styled.div`
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0, 0.7);
  z-index: 10;
`

const Spinner = styled.div`
  position: absolute;
  top: calc(50% - 19px);
  left: calc(50% - 19px);

  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 3px solid ${props => props.theme.pallete.primary.main};
  border-right: 3px solid ${props => props.theme.pallete.primary.main};
  border-bottom: 3px solid ${props => props.theme.pallete.primary.main};
  border-left: 5px solid ${props => props.theme.pallete.common.yellow[1]};
  background: transparent;
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;

const Loader = () => {
  return (
    <Bg>
      <Spinner />
    </Bg>
  )
}

export default Loader;