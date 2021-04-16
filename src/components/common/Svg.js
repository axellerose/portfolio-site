import styled from "styled-components";
import { color, fontSize } from "styled-system";


const Svg = styled.div`
  color: ${({ theme }) => theme.pallete.common.yellow[0]};
  font-size: inherit;

  & svg {
    display: block;
    width: auto;
    height: 1em;
  }
  /* & path {
    ${({ colorType = "fill" }) => colorType}: currentColor;
  } */

  ${fontSize}
  ${color}
`;

export default Svg;
