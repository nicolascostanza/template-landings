// import Inicio from "../pages/inicio/Inicio";

const config = {
  publicRoutes: [
    {
      path: "/inicio",
      //   component: Inicio,
      exact: true,
    },
  ],
  privateRoutes: [
    {
      path: "/inicio",
      // component: Inicio,
      exact: true,
    },
  ],
  configPrivateRoutes: {
    checkLogin: true,
    checkAdmin: true,
    adminRoutes: ["/dashboard"],
    redirectNotLogged: "/",
    redirectNotAdmin: "/home",
  },
  navbar: {
    // estilos generales de la navbar
    generalNavBarStyles: {
      ["background-color"]: "blue",
      width: "100%",
      height: "100px",
      display: "flex",
      ["justify-content"]: "space-between",
      ["align-items"]: "center",
    },
    // estilos de cada caja
    boxStyles: {
      display: "flex",
      ["flex-direction"]: "row",
      ["justify-content"]: "center",
      gap: "20px",
    },
    // array de containers con elementos a renderizar
    containers: [
      [
        {
          image: {
            alt: "texto descriptivo",
            logoUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png",
          },
          styles: {
            height: "100px",
            width: "100px",
          },
          title: "Products",
          isForAdmin: true,
        },
      ],
      [
        {
          image: {},
          styles: {
            color: "green",
            ["background-color"]: "red",
						cursor: 'pointer'
          },
          title: "TESTEANDO ESTE",
          isForAdmin: true,
          dropdown: [
            {
              path: "/product1",
              title: "Product 1",
            },
          ],
        },
        {
          title: "Home",
          path: "/home",
          isForAdmin: false,
          dropdown: [],
        },
      ],
      [
        {
          image: {},
          title: "Final",
          isForAdmin: true,
          dropdown: [
            {
              path: "/product1",
              title: "Product 1",
            },
          ],
        },
        {
          title: "Home",
          path: "/home",
          isForAdmin: false,
          dropdown: [],
					styles: {
						['padding-right']: '15px',
					}
        },
      ],
    ],
  },
};

export default config;
