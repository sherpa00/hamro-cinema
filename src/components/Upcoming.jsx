import SingleMovieBox from "./SingleMovieBox";
import {useSelector} from "react-redux";

function Upcoming() {

    const upcoming = useSelector(state => state.upcoming.upcoming);

    return ( 
        <div className="w-full mx-auto my-10" id="upcoming">
            <h2 className="text-2xl font-bold my-10 text-purple-500 text-left w-[95%] mx-auto sm:text-4xl">
                Coming Soon
            </h2>
            <div className="w-[95%] mx-auto grid grid-cols-2 items-start justify-start gap-10 lg:grid-cols-3 sm:grid-cols-2">
                {
                    upcoming.map((el) => {
                        return <SingleMovieBox
                                    details={el}  
                                    key={el.name}
                                />
                    })
                }
            </div>
        </div>
     );
}

export default Upcoming;