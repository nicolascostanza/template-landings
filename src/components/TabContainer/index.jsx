/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import stylesCss from "./styles.module.css";

const ImagenStyled = styled.img`
  height: ${({ styles }) => styles?.height};
  width: ${({ styles }) => styles?.width};
  object-fit: ${({ styles }) => styles?.objectFit};
`;

const LiStyled = styled.div`
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

const ContainerTabStyled = styled.div`
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

{
  /* <li
className={styles.products}
onClick={() => setOpenDropDown(!openDropDown)}
>
<span className={styles.headerProducts}>
  <span
    className={`${
      pathname.includes("/producto") && styles.active
    } ${styles.spanProducto}`}
  >
    PRODUCTOS
  </span>
  <div className={styles.test}>
    <div
      className={`${styles.leftIcon} ${
        openDropDown && styles.leftIconOpen
      }`}
    />
    <div
      className={`${styles.rightIcon} ${
        openDropDown && styles.rightIconOpen
      }`}
    />
  </div>
</span>
<ul
  className={`${styles.dropdown} ${
    openDropDown ? styles.open : ""
  }`}
>
  <li className={styles.li}>
    <NavLink
      className={pathname.includes("/producto-1") && styles.active}
      to="/producto-1"
    >
      Producto 1
    </NavLink>
  </li>
  <li className={styles.li}>
    <NavLink
      className={pathname.includes("/producto-2") && styles.active}
      to="/producto-2"
    >
      Producto 2
    </NavLink>
  </li>
  <li className={styles.li}>
    <NavLink
      className={pathname.includes("/producto-3") && styles.active}
      to="/producto-3"
    >
      Producto 3
    </NavLink>
  </li>
  <li className={styles.li}>
    <NavLink
      className={pathname.includes("/producto-4") && styles.active}
      to="/producto-4"
    >
      Producto 4
    </NavLink>
  </li>
  <li className={styles.li}>
    <NavLink
      className={pathname.includes("/producto-5") && styles.active}
      to="/producto-5"
    >
      Producto 5
    </NavLink>
  </li>
</ul>
</li> */
}

function TabContainer({ container = [], isUserAdmin, boxStyles }) {
  const { pathname } = useLocation();
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <div>
      {!!container.length && (
        <ContainerTabStyled styles={boxStyles}>
          {container.map(
            ({ image, title, isForAdmin, styles, dropdown, path }) => {
              if (isForAdmin && !isUserAdmin) return null;
              if (image && image.logoUrl) {
                return (
                  <ImagenStyled
                    key={title}
                    src={image.logoUrl}
                    alt={image.alt}
                    styles={styles}
                  />
                );
              }

              if (dropdown && dropdown.length) {
                return (
                  <LiStyled
                    styles={styles}
                    key={title}
                    onClick={() => setOpenDropDown(!openDropDown)}
                  >
                    <span className={stylesCss.headerProducts}>
                      <span>
                        {title}
                      </span>
                      <div>
                        <div
                          className={`${stylesCss.leftIcon} ${
                            openDropDown && stylesCss.leftIconOpen
                          }`}
                        />
                        <div
                          className={`${stylesCss.rightIcon} ${
                            openDropDown && stylesCss.rightIconOpen
                          }`}
                        />
                      </div>
                    </span>
                  </LiStyled>
                );
              }

              return (
                // TODO: Pasar el LiStyled a un componente Link con styled componentes
                <LiStyled styles={styles} key={title}>
                  {title}
                </LiStyled>
              );
            }
          )}
        </ContainerTabStyled>
      )}
    </div>
  );
}

export default TabContainer;
