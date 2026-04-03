import { Link } from "react-router-dom";

export default function Rodape(){

    return(
        <footer className='flex flex-col text-center gap-4 p-7 border-t border-gray-300 text-[var(--color-font-black)]'>
           
            <div className='flex justify-center'>
                <Link className="text-[0.8rem]" to="/sobre">Sobre</Link>
            </div>
        </footer>
    );
}