import { Link } from "react-router-dom";
 
export default function Menu(){
    return(
        <nav className="flex items-center gap-8">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">Find All</Link>
            <Link to="/id" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">Find by Id</Link>
            <Link to="/save" className="text-green-500 hover:text-blue-200 transition-colors duration-200 font-medium">Save</Link>
            <Link to="/update" className="text-yellow-500 hover:text-blue-200 transition-colors duration-200 font-medium">Update</Link>
            <Link to="/delete" className="text-red-500 hover:text-blue-200 transition-colors duration-200 font-medium">Delete</Link>
        </nav>
    );
} 