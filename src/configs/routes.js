import Inicio from "../pages/inicio/Inicio";

const publicRoutes = [
  {
    path: "/inicio",
    component: Inicio,
    exact: true,
  },
];

const privateRoutes = [
  {
    path: "/inicio",
    component: Inicio,
    exact: true,
  },
];

const configPrivateRoutes = {
	checkLogin: true,
	checkAdmin: true,
	adminRoutes: ['/dashboard'],
	redirectNotLogged: '/',
	redirectNotAdmin: '/home'
};

export { publicRoutes, privateRoutes, configPrivateRoutes };
