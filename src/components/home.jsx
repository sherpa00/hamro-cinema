import Contact from "./contact";
import Hero from "./hero";
import NowShowing from "./NowShowing";
import Upcoming from "./Upcoming";

function Home() {
    return ( 
        <div className="w-full">
            <Hero/>
            <NowShowing/>
            <Upcoming/>
            <Contact/>
        </div>
     );
}

export default Home;