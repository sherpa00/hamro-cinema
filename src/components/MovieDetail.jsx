import Contact from "./contact";
import { useSelector } from "react-redux";
import { createRef, useEffect, useState } from "react";

function MoveiDetail() {

    const [current,setCurrent] = useState({});

    const currentMovie = useSelector(state => state.currentMovie.currentMovie);

    useEffect(() => {
        setCurrent(currentMovie);
    },[currentMovie])

    useEffect(() => {
        window.scrollTo({ top: 0});
    },[])

    const {
        name,
        genre,
        run_time,
        director,
        cast,
        synopsis,
        trailer_src,
        showing_from,
        movie_time,
        time_span,
        expiring_on,
        ticket_price,
        poster_src
    } = current;

    console.log(name);

    return ( 
        <div className="w-full">
            <div className="w-full flex flex-col items-center justify-center gap-16 my-20 md:flex-row md:items-start">
                <img src={poster_src} alt="pic" className=" w-[65%] md:w-[300px]"/>
                <div className="text-left w-[80%] md:w-1/2">
                    <h2 className="text-3xl font-bold mb-5 md:text-4xl">
                        {name}
                    </h2>

                    <p className="text-lg my-3 md:text-xl">
                        <b>Genre</b> : {genre}
                    </p>

                    <p className="text-lg my-3 md:text-xl">
                        <b>Run time</b> : {run_time}
                    </p>

                    <p className="text-lg my-3 md:text-xl">
                        <b>Director</b> : {director}
                    </p>

                    <p className="text-lg my-3 md:text-xl">
                        <b>Cast</b> : {cast}
                    </p>

                    <p className="text-lg my-3 md:text-xl">
                        <b>SYNOPSIS</b><br></br>
                        {synopsis}
                    </p>
                </div>
            </div>

            <iframe src={trailer_src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-[80%] mx-auto h-[60vh] my-10">

            </iframe>

            <div className="w-full my-10 text-center">
                <h2 className="text-3xl font-bold my-10 md:text-4xl">
                    -- SHOWTIME --
                </h2>

                <div className=" w-[80%] mx-auto grid grid-cols-1">

                <h3 className="text-xl my-5 border-b-2 border-black p-6 md:text-3xl">
                        <b className="text-orange-600">Ticket Price</b> : {ticket_price}
                    </h3>

                    <h3 className="text-xl my-5 border-b-2 border-black p-6 md:text-3xl">
                        <b className="text-green-600">Showing From</b> : {showing_from}
                    </h3>

                    <h3 className="text-xl my-5 border-b-2 border-black py-6 md:text-3xl">
                        <b className="text-gray-600">Movie Time</b> : {movie_time}
                    </h3>

                    <h3 className="text-xl my-5 border-b-2 border-black p-6 md:text-3xl">
                        <b className="text-blue-600">Time Span</b> : {time_span}
                    </h3>

                    <h3 className="text-xl my-5 border-b-2 border-black p-6 md:text-3xl">
                        <b className="text-red-600">Expiring On</b> : {expiring_on}
                    </h3>
                </div>
            </div>
            <Contact/>
        </div>
     );
}

export default MoveiDetail;