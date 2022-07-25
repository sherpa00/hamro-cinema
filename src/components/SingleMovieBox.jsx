
import {BsFillArrowRightSquareFill} from "react-icons/bs"
import {Link,useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"
import { addCurrentMovie } from "../slices/currentMovie";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function SingleMovieBox(props) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    },[])

    /*const button = "<button onClick={currentMovieAdd}  className="flex flex-row gap-1 items-center justify-center text-base text-black bg-purple-400 text-center py-1 px-3 rounded-md cursor-pointer hover:bg-blue-400 mt-1 md:text-lg sm:px-5 sm:py-2">
    <Link to="/movie/">Show More
    </Link>
    <BsFillArrowRightSquareFill/>
</button>";*/

    const details = props.details;

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const currentMovieAdd = () => {
        dispatch(addCurrentMovie(details))
    }

    const handleNavigate = (e) => {
        currentMovieAdd();
        navigate(`/movie/${details.name}`);
    }

    return ( 
        <div className="w-[125px] flex flex-col gap-3 items-left text-left justify-between md:w-[300px] sm:w-[250px] mx-auto" data-aos="zoom-in" data-aos-duration="500">
            <div className="w-full h-[200px] bg-purple-500 sm:h-[380px] cursor-pointer bg-cover bg-bottom" style={{backgroundImage: `url(${details.poster_src})`}} onClick={handleNavigate} value={details.name}>

            </div>
            <h3 className="text-base font-bold sm:text-xl cursor-pointer" onClick={handleNavigate} value={details.name}>
                {
                    details.name
                }
            </h3>
            
        </div>
     );
}

export default SingleMovieBox;