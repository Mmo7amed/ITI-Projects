import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './components/Product/Product';
import Item from './components/Item/Item';
import Pizza from './components/Pizza/Pizza';
import Register from './components/Register/Register';
import AppProvider from './context/AppContext';

function App() {

    const routers = createBrowserRouter([
        {path: '/', element: <Layout />, children: [
            { index: true, element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'gallery', element: <Gallery />, children: [
              {path: 'list1', element: <Product />},
              {path: 'list2', element: <Item />}
             
            ] },
            { path: 'about', element: <About /> },
            { path: '*', element: <Notfound /> },
            { path: 'pizza', element: <Pizza /> },
            { path: 'register', element: <Register /> }

        ]}
    ]);

  return (
    <>
      <AppProvider>
        <RouterProvider router={routers} />
      </AppProvider>
    </>
  )
}

export default App
