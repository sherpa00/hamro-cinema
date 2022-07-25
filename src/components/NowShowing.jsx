import SingleMovieBox from "./SingleMovieBox";
import {useSelector} from "react-redux";

function NowShowing() {

    const nowshowing = useSelector(state => state.nowshowing.nowshowing)

    return ( 
        <div className="w-full mx-auto my-20 " id="now_showing">
            <h2 className="text-2xl font-bold my-10 text-purple-500 text-left w-[95%] mx-auto sm:text-4xl">
                Now Showing
            </h2>
            <div className="w-[95%] mx-auto grid grid-cols-2  items-start justify-start gap-10 lg:grid-cols-3 sm:grid-cols-2">
                {
                    nowshowing.map((el) => {
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

export default NowShowing;