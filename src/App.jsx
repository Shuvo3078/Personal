import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/page/Home';
import RootLayout from './components/RootLayout';
import AboutMe from './components/layer/AboutMe';
import Skills from './components/layer/Skills';
import Portfolio from './components/layer/Portfolio';
import Contact from './components/page/Contact';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
      >
        <Route index element={<Home/>}/>
        <Route path="/aboutMe" element={<AboutMe/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
