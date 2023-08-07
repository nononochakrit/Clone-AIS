import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import * as React from "react";
import { createRoot } from "react-dom/client";
import Consumers from './Consumers';
import Store from './Store';

import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Package from './Package';
import Promotions from './Promotions';
import Fibre from './Fibre';
import Lifestyle from './Lifestyle';
import Privilages from './Privilages';
import Support from './Support';

const router = createBrowserRouter([
  {path: "/",element: <Consumers/>,},
  {path: "store",element: <Store/>,},
  {path: "package",element: <Package/>,},
  {path: "fibre",element: <Fibre/>,},
  {path: "promotions",element: <Promotions/>,},
  {path: "lifestyle",element: <Lifestyle/>,},
  {path: "privileges",element:<Privilages/>,},
  {path: "help-and-support",element: <Support/>,},
  {path: "about-us",element: <p>about us</p>,},
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
