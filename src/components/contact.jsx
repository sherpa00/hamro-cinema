import {BsFacebook,BsInstagram,BsYoutube,BsTwitter} from "react-icons/bs"
import {FaTiktok} from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return ( 
        <div className="w-full my-20" data-aos="fade-right" data-aos-duration="2000">
            <h2 className="text-4xl font-bold text-purple-500">Keep us in touch</h2>

            <ul className="flex flex-row items-center justify-evenly w-full mx-auto my-10">
                <li className="text-3xl cursor-pointer hover:text-purple-500 lg:text-5xl sm:text-4xl">
                    <BsFacebook />
                </li>
                <li className="text-3xl cursor-pointer hover:text-purple-500 lg:text-5xl sm:text-4xl">
                    <BsInstagram />
                </li>
                <li className="text-3xl cursor-pointer hover:text-purple-500 lg:text-5xl sm:text-4xl">
                    <BsTwitter />
                </li>
                <li className="text-3xl cursor-pointer hover:text-purple-500 lg:text-5xl sm:text-4xl">
                    <BsYoutube />
                </li>
                <li className="text-3xl cursor-pointer hover:text-purple-500 lg:text-5xl sm:text-4xl">
                    <FaTiktok />
                </li>
            </ul>
        </div>
     );

}

export default Contact;