import { Outlet } from 'react-router-dom';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Rodape from './components/Rodape/Rodape';
import { MenuProvider } from './components/Menu/context/MenuContext';
 MenuProvider
export default function App() {
  return (
    <MenuProvider>
      <div className="app-container">
          <Cabecalho />
          <Outlet />
          <Rodape />
      </div>
    </MenuProvider>
  );
}
