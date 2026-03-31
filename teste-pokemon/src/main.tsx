import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./globals.css";
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./globals.css";
import Error from './routes/Error';
import Sobre from './routes/PagesRodape/Sobre';
import All from './routes/pagesAPI/All';
import Delete from './routes/pagesAPI/Delete';
import Update from './routes/pagesAPI/Update';
import Id from './routes/pagesAPI/Id';
import Save from './routes/pagesAPI/Save';

const router = createBrowserRouter([
    {path: "/", element: <App/>, errorElement: <Error/>, children: [
        {path: "/", element:<All/>},
        {path: "/delete", element:<Delete/>},
        {path: "/update", element:<Update/>},
        {path: "/id", element:<Id/>},
        {path: "/save", element:<Save/>},
        {path: "/sobre", element:<Sobre/>},
    ]},
], {basename: import.meta.env.VITE_BASE_URL});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)