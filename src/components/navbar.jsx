import { useState } from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import {Link,useNavigate} from "react-router-dom"


function Navbar() {
    const [show,setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    const navigate = useNavigate();

    const handleRefresh = () => {
        navigate("/");
        window.location.reload();
    }

    return ( 
        <div className="w-full sticky top-0 bg-purple-500 h-20 py-4 flex flex-row justify-around items-center font-sans z-10">
            <h1 className="text-xl cursor-pointer sm:text-3xl font-sans" onClick={handleRefresh}>
                Hamro Cinema
            </h1>

            <ul className="hidden flex-row gap-7 items-center justify-center text-lg md:flex sm:text-xl">
                <li className="cursor-pointer hover:text-white">
                    <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer hover:text-white">
                    <Link to="/movies">Movies</Link>
                </li>
                <li className="cursor-pointer hover:text-white">
                    <Link to="/about-us">About us</Link>
                </li>
                <li className="cursor-pointer hover:text-white">
                    <Link to="/contact-us">Contact</Link>
                </li>
                <button className="cursor-pointer text-center bg-white px-3 py-2 hover:bg-green-400 rounded-sm">
                    <Link to="/login">
                        Login
                    </Link>
                </button>
            </ul>

            <div className="flex md:hidden cursor-pointer hover:text-white hover-bg-white" onClick={handleShow}>
                {
                    !show ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />
                }
            </div>

            <div className={!show ? "p-0 bg-purple-500 list-none flex md:hidden flex-col justify-center fixed top-0 right-[-100%] items-center w-full h-full duration-300 ease-linear text-2xl" : "bg-purple-500 list-none flex md:hidden flex-col justify-center fixed top-0 right-0  items-center w-full h-full ease-linear duration-300 text-2xl p-0"}>

            <div className="cursor-pointer absolute top-10 right-10 text-3xl" onClick={handleShow}>
                <AiOutlineClose/>
                </div>

                <ul className="flex flex-col gap-10 justify-center items-center w-full p-0 text-lg sm:text-xl">
                    <li className="cursor-pointer hover:text-white" onClick={handleShow}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="cursor-pointer hover:text-white" onClick={handleShow}>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li className="cursor-pointer hover:text-white" onClick={handleShow}>
                        <Link to="/about-us">About us</Link>
                    </li>
                    <li className="cursor-pointer hover:text-white" onClick={handleShow}>
                        <Link to="/contact-us">Contact us</Link>
                    </li>
                    <button className="cursor-pointer text-center bg-white px-3 py-2 hover:bg-green-400 rounded-md" onClick={handleShow}>
                        <Link to="/login">
                            Login
                        </Link>
                    </button>
                </ul>
            </div>
        </div>
     );
}

export default Navbar;