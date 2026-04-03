import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./globals.css";
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./globals.css";
import Error from './routes/Error';
import Sobre from './routes/PagesRodape/Sobre';
import ClienteAll from './routes/PagesAPI/Cliente/All';
import ClienteId from './routes/PagesAPI/Cliente/Id';
import ClienteSave from './routes/PagesAPI/Cliente/Save';
import ClienteUpdate from './routes/PagesAPI/Cliente/Update';
import RemedioAll from './routes/PagesAPI/Remedio/All';
import RemedioId from './routes/PagesAPI/Remedio/Id';
import RemedioSave from './routes/PagesAPI/Remedio/Save';
import RemedioUpdate from './routes/PagesAPI/Remedio/Update';
import ClienteDelete from './routes/PagesAPI/Cliente/Delete';
import RemedioDelete from './routes/PagesAPI/Remedio/Delete';
import VendaAll from './routes/PagesAPI/Venda/All';
import VendaId from './routes/PagesAPI/Venda/Id';
import VendaSave from './routes/PagesAPI/Venda/Save';
import VendaUpdate from './routes/PagesAPI/Venda/Update';
import ItemVendidoAll from './routes/PagesAPI/ItemVendido/All';
import ItemVendidoId from './routes/PagesAPI/ItemVendido/Id';


const router = createBrowserRouter([
    {path: "/", element: <App/>, errorElement: <Error/>, children: [
        {path: "/", element:<Sobre/>},
        {path: "/sobre", element:<Sobre/>},
        //cliente
        {path: "/cliente", element:<ClienteAll/>},
        {path: "/cliente/id", element:<ClienteId/>},
        {path: "/cliente/save", element:<ClienteSave/>},
        {path: "/cliente/update", element:<ClienteUpdate/>},
        {path: "/cliente/delete", element:<ClienteDelete/>},
        //remedio
        {path: "/remedio", element: <RemedioAll/>},
        {path: "/remedio/id", element:<RemedioId/>},
        {path: "/remedio/save", element:<RemedioSave/>},
        {path: "/remedio/update", element:<RemedioUpdate/>},
        {path: "/remedio/delete", element:<RemedioDelete/>},
        //venda
        {path: "/venda", element: <VendaAll/>},
        {path: "/venda/id", element: <VendaId/>},
        {path: "/venda/save", element: <VendaSave/>},
        {path: "/venda/update", element: <VendaUpdate/>},
        //item vendido
        {path: "/itemvendido", element: <ItemVendidoAll/>},
        {path: "/itemvendido/id", element: <ItemVendidoId/>}
    ]},
], {basename: import.meta.env.VITE_BASE_URL});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)