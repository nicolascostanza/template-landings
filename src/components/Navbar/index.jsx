/* eslint-disable react/prop-types */
import TabContainer from "../TabContainer/index.jsx";
import styled, { css } from "styled-components";

const DivStyled = styled.div`
  ${({ styles }) =>
    styles &&
    css`
      ${Object.keys(styles).map(
        (prop) => css`
          ${prop}: ${styles[prop]};
        `
      )}
    `}
`;

function Navbar({ containers, isUserAdmin = false, generalNavBarStyles, boxStyles }) {
  return (
    <DivStyled styles={generalNavBarStyles}>
      {!!containers.length &&
        containers.map((container) => {
          return (
            <TabContainer
              // stylesitems={}
              // asignar key en las configs
              key={container.length}
              container={container}
              isUserAdmin={isUserAdmin}
              boxStyles={boxStyles}
            />
          );
        })}
    </DivStyled>
  );
}

export default Navbar;
