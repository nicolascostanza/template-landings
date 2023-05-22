import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: ${props => props.direcction === 'normal' ? 'row' : 'row-reverse'};
  justify-content: space-between;
  height: 100px;
  width: 100px;
  background-color: red;
`;
