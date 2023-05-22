import configs from "./configs";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { publicRoutes, privateRoutes, navbar } = configs;
  const { boxStyles, generalNavBarStyles, containers } = navbar;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/test"
          element={
            <Navbar
              boxStyles={boxStyles}
              generalNavBarStyles={generalNavBarStyles}
              containers={containers}
              isUserAdmin={true}
            />
          }
          exact={true}
        />
        {publicRoutes.map(({ path, component, exact }) => (
          <Route
            key={path}
            path={path}
            component={component}
            exact={exact || undefined}
          />
        ))}
        {/* <Route element={<PrivateRoute />}>
          {privateRoutes.map(({ path, component, exact }) => (
            <Route
              key={path}
              path={path}
              component={component}
              exact={exact || undefined}
            />
          ))}
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
