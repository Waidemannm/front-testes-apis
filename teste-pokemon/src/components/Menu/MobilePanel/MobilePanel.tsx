import { Link } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";
import React, { useEffect } from 'react';
import { FaHome, FaIdCard, FaSave, FaUpload, FaTrash} from 'react-icons/fa';


export default function MobilePanel(): React.ReactElement {

    const { isOpen, close } = useMenu();

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isOpen ? 'hidden' : '';
            document.documentElement.style.overflow = "hidden";
        }
        return () => {
            if (typeof document !== 'undefined') {
                document.body.style.overflow = '';
                document.documentElement.style.overflow = "";
            }
        };
        
    }, [isOpen]);
 
    return (
        <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu móvel"
            className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 p-10 ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div 
                className={`absolute inset-0  bg-[var(--color-2)] backdrop-blur-sm transition-all duration-500 ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`} 
                onClick={close} 
                aria-hidden
            ></div>
            <div 
                className={`relative z-10 flex flex-col items-center justify-center h-full text-white/90 transition-all duration-500 transform ${
                    isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
                }`}

            >
                <nav className="overflow-y-auto overflow-x-hidden flex flex-col items-left gap-8" onClick={close}>

                    <Link 
                        to="/" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaHome className="text-2xl" />
                        <span>Find All</span>
                    </Link>
                    <Link 
                        to="/id" 
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaIdCard className="text-2xl" />
                        <span>Find by Id</span>
                    </Link>
                    <Link 
                        to="/save" 
                        className="flex text-green-500  items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaSave className="text-2xl" />
                        <span>save</span>
                    </Link>

                    <Link 
                        to="/update" 
                        className="flex text-yellow-500 items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaUpload className="text-2xl" />
                        <span>Update</span>
                    </Link>

                    <Link 
                        to="/delete" 
                        className="flex text-red-500  items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-blue-400 hover:scale-105 active:scale-95" 
                        role="menuitem"
                    >
                        <FaTrash className="text-2xl" />
                        <span>Delete</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
 

