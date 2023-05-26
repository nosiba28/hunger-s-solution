import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './components/layout/Main.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Terms from './components/Terms/Terms.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Recipe from './components/Recipe/Recipe.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Blog from './components/Blog/Blog.jsx';
import About from './components/About/About.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import SearchRecipes from './components/SearchRecipes/SearchRecipes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
         path: "/",
         element: <Home></Home>
      },
      {
        path: ':id',
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
        loader: ({params}) => fetch(`https://hunger-s-solution-server-nosiba28.vercel.app/chefs/${params.id}`)
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/terms',
        element: <Terms></Terms>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/myrecipes",
        element: <PrivateRoute><SearchRecipes></SearchRecipes></PrivateRoute>
      }
    ]
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
