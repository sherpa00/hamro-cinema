import {Link} from "react-router-dom";

function Footer() {

    const handleClick = (e) => {
        window.scrollTo({top: 0});
        window.location.reload();
    }

    return ( 
        <div className="bg-purple-500 py-10 w-full">
            <h1 className="text-2xl font-bold sm:text-4xl" onClick={handleClick}>
                Hamro Cinema
            </h1>
            <ul className="flex flex-col w-full justify-center items-center gap-10 mx-auto my-5 text-lg md:flex-row sm:text-xl font-medium">
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
                    <Link to="/contact-us">Contact us</Link>
                </li>
            </ul>

            <ul className="flex flex-col md:flex-row gap-10 w-full justify-center items-center mx-auto my-5">
                <li>Privacy and policeis</li>
                <li>Terms and Conditions</li>
                <li>copyright</li>
            </ul>
            <div className="flex flex-col items-center justify-center gap-2">
                <p>www.xyz.com @ all right reserved 2022</p>
                <p>Powered by Chhewang Sherpa 2021-01-02</p>
            </div>
        </div>
     );
}

export default Footer;