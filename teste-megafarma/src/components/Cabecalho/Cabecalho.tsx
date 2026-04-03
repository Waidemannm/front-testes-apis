import Menu from "../Menu/Menu";
import { MenuProvider } from "../Menu/context/MenuContext";
import HamburgerButton from "../Menu/HamburgerButton/HamburgerButton";
import MobilePanel from "../Menu/MobilePanel/MobilePanel";

export default function Cabecalho() {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between text-white shadow-lg md:flex-col xl:flex-row">
      <MenuProvider>
        <div className="flex items-center p-5 gap-4">
          <div className="hidden md:block">
            <Menu />
          </div>
          <div className="md:hidden">
            <HamburgerButton className="text-white hover:bg-white/20" />
          </div>
        </div>
        <MobilePanel />
      </MenuProvider>
    </header>
  );
}
