import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import "./App.css";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <p>Not Found</p> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
