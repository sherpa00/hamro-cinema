import NowShowing from "./NowShowing";
import Upcoming from "./Upcoming";

function Movies() {
    return ( 
        <div className="w-full">
            <NowShowing/>
            <Upcoming/>
        </div>
     );
}

export default Movies;