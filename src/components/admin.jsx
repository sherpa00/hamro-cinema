import { useEffect, useState } from "react";
import {AiFillDelete} from "react-icons/ai"
import {useSelector,useDispatch} from "react-redux";
import { db } from "../firebase/firebaseFirestore";
import { setDoc, doc } from "firebase/firestore";
import { addNowShowing, removeAllNowShowing, removeNowShowing } from "../slices/nowshowing";
import { addUpComing, removeAllUpComing, removeUpComing } from "../slices/upcoming";
import toast, {Toaster} from "react-hot-toast";

function Admin() {

    const token = useSelector(state => state.token.token);

    if (token === "") {
        return <h1 className="h-screen text-red-400 text-2xl font-bold mt-20">NOT AUTHENTICATED</h1>
    }

    return ( 
        <div className="w-full">
            <Toaster/>
            <h2 className="text-3xl font-bold mt-20 mb-5 text-purple-600 sm:text-5xl">
                WELCOME TO ADMIN PANEL
            </h2>

            <p className="text-lg font-bold sm:text-xl">
                Here you can add, read remove and delete movies in upcoming and Now showing sectinos.
            </p>

            <div className="flex flex-col items-center justify-center gap-5 w-[98%] mx-auto sm:flex-row sm:gap-10">
                
                <button className=" mt-14 text-xl font-bold px-5 py-3 rounded-md hover:bg-white border-2 border-gray-400 duration-500 ease-in-out bg-green-500">
                    <a href="#edit_now_showing">Edit Now Showing</a>
                </button>

                <button className=" mt-14 text-xl font-bold px-5 py-3 rounded-md hover:bg-white border-2 border-gray-400 duration-500 ease-in-out bg-purple-400">
                    <a href="#banner">Edit Movie Banner</a>
                </button>
                <button className=" mt-14 text-xl font-bold px-5 py-3 rounded-md hover:bg-white border-2 border-gray-400 duration-500 ease-in-out bg-green-500">
                    <a href="#edit_up_coming">Edit Up - Coming</a>
                </button>
            </div>

            <h4 className="text-blue-600 text-3xl font-bold mb-5 mt-40 border-b-2 border-gray-500 w-[80%] mx-auto pb-3">EDIT SECTION</h4>

            <BannerAdmin/>

            <NowShowingAdmin />

            <UpComingAdmin/>
            
        </div>
     );
}

function AddForm( props ) {

    const type = props.type;

    const nowshowing = useSelector(state => state.nowshowing.nowshowing);
    const upcoming = useSelector(state => state.upcoming.upcoming)

    const dispatch = useDispatch();

    const [name,setName] = useState("")
    const [genre,setGenre] = useState("")
    const [run_time,setRun_time] = useState("")
    const [director,setDirector] = useState("")
    const [cast,setCast] = useState("")
    const [synopsis,setSynopsis] = useState("")
    const [trailer_src,setTrailer_src] = useState("")
    const [showing_from,setShowing_from] = useState("")
    const [movie_time,setMovie_time] = useState("")
    const [expiring_on,setExpiring_on] = useState("")
    const [time_span,setTime_span] = useState("")
    const [ticket_price,setTicket_price] = useState("")
    const [poster_src,setPoster_src] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const handleRunTimeChange = (e) => {
        setRun_time(e.target.value);
    }

    const handleDirectorChange = (e) => {
        setDirector(e.target.value);
    }

    const handleCastChange = (e) => {
        setCast(e.target.value);
    }

    const handleSynopsisChange = (e) => {
        setSynopsis(e.target.value);
    }

    const handleTrailerSrcChange = (e) => {
        setTrailer_src(e.target.value);
    }

    const handleShowingFromChange = (e) => {
        setShowing_from(e.target.value);
    }

    const handleMovieTimeChange = (e) => {
        setMovie_time(e.target.value);
    }

    const handleExpiringOnChange = (e) => {
        setExpiring_on(e.target.value);
    }

    const handleTimeSpanChange = (e) => {
        setTime_span(e.target.value);
    }

    const handleTicketPriceChange = (e) => {
        setTicket_price(e.target.value);
    }

    const handlePosterSrc = (e) => {
        setPoster_src(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newJson = {
            name: name,
            genre: genre,
            run_time: run_time,
            director: director,
            cast: cast,
            synopsis: synopsis,
            trailer_src: trailer_src,
            showing_from: showing_from,
            movie_time: movie_time,
            expiring_on: expiring_on,
            time_span: time_span,
            ticket_price: ticket_price,
            poster_src: poster_src
        }

        if (type === "now-showing") {
            const temp = [...nowshowing,newJson];
            
            dispatch(addNowShowing(temp));
        }

        if (type === "up-coming") {
            const temp = [...upcoming,newJson];

            dispatch(addUpComing(temp))
        }

        toast.success(`Added "${name} sucessfully"`)

        setName("")
        setGenre("");
        setRun_time("");
        setCast("");
        setDirector("");
        setSynopsis("")
        setShowing_from("")
        setExpiring_on("")
        setPoster_src("");
        setTrailer_src("");
        setMovie_time("");
        setTime_span("")
        setTicket_price("");     
    }


    useEffect(() => {

        if (type === "now-showing") {
            // add to now-showing
            
            setDoc(doc(db,"movies","now-showing"),{
                movies: nowshowing
            }
            );


        }

        if (type === "up-coming") {
            // add to now-showing
            
            setDoc(doc(db,"movies","up-coming"),{
                movies: upcoming
            });
        }
    },[upcoming,nowshowing,type])



    return (
        <form onSubmit={handleSubmit} className="w-[90%] mx-auto my-20 flex flex-col items-center justify-center gap-10">

            <label htmlFor="name" className="text-xl font-bold text-purple-700 -mb-8">Name</label>
            <input id="name" name="name" value={name} onChange={handleNameChange} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="movie name" required/>

            <label htmlFor="genre" className="text-xl font-bold text-purple-700 -mb-8">Genre</label>
            <input id="genre" name="genre" value={genre} onChange={handleGenreChange} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="movie genre" required/>

            <label htmlFor="run_time" className="text-xl font-bold text-purple-700 -mb-8">Run-Time</label>
            <input id="run_time" name="run_time" value={run_time} onChange={handleRunTimeChange} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="movie Run-Time" required/>

            <label htmlFor="director" className="text-xl font-bold text-purple-700 -mb-8">Director</label>
            <input id="director" name="director" value={director} onChange={handleDirectorChange} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="movie Director" required/>

            <label htmlFor="cast" className="text-xl font-bold text-purple-700 -mb-8">cast</label>
            <input id="cast" name="cast" value={cast} onChange={handleCastChange} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="movie cast" required/>

            <label htmlFor="synopsis" className="text-xl font-bold text-purple-700 -mb-8">Synopsis</label>
            <input id="synopsis" name="synopsis" value={synopsis} onChange={handleSynopsisChange} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="movie synopsis" required/>

            <label htmlFor="poster_src" className="text-xl font-bold text-purple-700 -mb-8">Poster Source</label>
            <input id="poster_src" name="poster_src" value={poster_src} onChange={handlePosterSrc} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="movie Poster Source" required/>

            <label htmlFor="trailer_src" className="text-xl font-bold text-purple-700 -mb-8">Trailer Source</label>
            <input id="trailer_src" name="trailer_src" value={trailer_src} onChange={handleTrailerSrcChange} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="movie Trailer Source" required/>

            <label htmlFor="showing_from" className="text-xl font-bold text-purple-700 -mb-8">Showing From</label>
            <input id="showing_from" name="showing_from" value={showing_from} onChange={handleShowingFromChange} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="Showing From" required/>

            <label htmlFor="movie_time" className="text-xl font-bold text-purple-700 -mb-8">Movie Time</label>
            <input id="movie_time" name="movie_time" value={movie_time} onChange={handleMovieTimeChange} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="movie Time" required/>

            <label htmlFor="time_span" className="text-xl font-bold text-purple-700 -mb-8">Time Span</label>
            <input id="time_span" name="time_span" value={time_span} onChange={handleTimeSpanChange} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="movie Time Span" required/>

            <label htmlFor="expiring_on" className="text-xl font-bold text-purple-700 -mb-8">Expiring On</label>
            <input id="expiring_on" name="expiring_on" value={expiring_on} onChange={handleExpiringOnChange} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="Expiring On" required/>

            <label htmlFor="ticket_price" className="text-xl font-bold text-purple-700 -mb-8">Ticket Price</label>
            <input id="ticket_price" name="ticket_price" value={ticket_price} onChange={handleTicketPriceChange} className="w-full py-3 indent-3 text-xl rounded-md border-2 border-gray-400" placeholder="movie Ticket Price" required/>

            <button type="submit" className="bg-green-400 text-xl cursor-pointer px-5 py-3 rounded-md hover:text-white">
                Add Movie
            </button>
        </form>
    )
}

function SingleBox(props) {

    const details = props.details;

    const handleDelete = () => {
        // remove from list movies if nowshowing or upcoming
        props.onRemove(props.id)
    }
    return ( 
        <div className="w-[200px] flex flex-col items-center justify-between md:w-[300px] sm:w-[250px] mx-auto">
            <div className="w-full h-[250px] bg-purple-500 sm:h-[380px] bg-cover bg-bottom" style={{backgroundImage: `url(${details.poster_src})`}}>

            </div>
            <h3 className="text-xl font-bold my-3">
                {
                    details.name
                }
            </h3>
            
            <button onClick={handleDelete}  className="flex flex-row gap-2 items-center justify-center text-base text-black bg-red-400 text-center py-2 px-5 rounded-md cursor-pointer hover:bg-gray-400 mt-3 md:text-lg">
                Remove
                <AiFillDelete/>
            </button>
        </div>
     );
}

function NowShowingAdmin() {

    const [show,setShow] = useState(false);

    const nowshowing = useSelector(state => state.nowshowing.nowshowing);

    const handleShow = () => {
        setShow(!show);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        //remove from db
        setDoc(doc(db,"movies","now-showing"),{
            movies: nowshowing
        });
    },[nowshowing])

    const handleRemoveSingle = (id) => {
        dispatch(removeNowShowing(id));
        toast.success("Delete Succesfull")
    }

    const handleRemoveAll = () => {
        dispatch(removeAllNowShowing());
        toast.success("Delete all movies succesfully")
    }

    return (
        <div id="edit_now_showing">
                <h2 className="text-2xl font-bold mt-20 mb-5 sm:text-4xl">
                    NOW SHOWING EDIT SECTION
                </h2>

                <div className="w-[90%] mx-auto grid grid-cols-1  items-start justify-start gap-10 lg:grid-cols-3 sm:grid-cols-2">
                    {
                        nowshowing.map((el,index) => {
                            return <SingleBox
                                        key={index}
                                        details={el}
                                        id={index}
                                        type="nowshowing"
                                        onRemove={handleRemoveSingle}
                                    />
                        })
                    }
                </div>
                    
                {nowshowing.length <= 0 ? null : <button onClick={handleRemoveAll} className=" mt-14 text-xl font-bold px-5 py-3 rounded-md hover:bg-white border-2 border-gray-400 duration-500 ease-in-out bg-red-400">
                    REMOVE ALL
                </button>}
                
                <h2 className="text-2xl text-green-600 font-bold mt-20">ADD MOVIES IN NOW SHOWING SECTION</h2>
                
                {
                    !show ? <button className="text-xl font-bold my-5 rounded-md hover:bg-gray-500 bg-green-500 px-5 py-3 cursor-pointer" onClick={handleShow}>show Add Movies</button> : <button className="text-xl font-bold my-5 rounded-md hover:bg-gray-500 bg-green-500 px-5 py-3 cursor-pointer" onClick={handleShow}>Hide Add Movies</button>
                }

                {
                    !show ? null : <AddForm type="now-showing"/>
                }
            </div>
    )
}

function UpComingAdmin() {

    const [show,setShow] = useState(false);

    const upcoming = useSelector(state => state.upcoming.upcoming);

    const handleShow = () => {
        setShow(!show);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        //remove from db
        setDoc(doc(db,"movies","up-coming"),{
            movies: upcoming
        });
    },[upcoming])

    const handleRemoveSingle = (id) => {
        dispatch(removeUpComing(id))
        toast.success("Delete successfull")
    }

    const handleRemoveAll = () => {
        dispatch(removeAllUpComing());
        toast.success("Deleted all movies successfully")
    }

    return ( <div id="edit_up_coming">
        <h2 className="text-2xl font-bold mb-10 sm:text-4xl">
            UP-COMING EDIT SECTION
        </h2>

        <div className="w-[90%] mx-auto grid grid-cols-1  items-start justify-start gap-10 lg:grid-cols-3 sm:grid-cols-2">
            {
                upcoming.map((el,index) => {
                    return <SingleBox
                                key={index}
                                details={el}
                                id={index}
                                type="upcoming"
                                onRemove={handleRemoveSingle}
                            />
                })
            }
        </div>

        { upcoming.length <= 0 ? null : <button onClick={handleRemoveAll} className="text-xl font-bold mt-14 px-5 py-3 rounded-md hover:bg-white border-2 border-gray-400 duration-500 ease-in-out bg-red-400">
            REMOVE ALL
        </button>}
        <h2 className="text-2xl text-green-600 font-bold mt-20">ADD MOVIES IN UP COMING SECTION</h2>

        {
            !show ? <button className="text-xl font-bold my-5 rounded-md hover:bg-gray-500 bg-green-500 px-5 py-3 cursor-pointer" onClick={handleShow}>show Add Movies</button> : <button className="text-xl font-bold my-5 rounded-md hover:bg-gray-500 bg-green-500 px-5 py-3 cursor-pointer" onClick={handleShow}>Hide Add Movies</button>
        }

        {
            !show ? null : <AddForm type="up-coming"/>
        }
    </div> );
}

function BannerAdmin() {

    const [first,setFirst] = useState("");
    const [second,setSecond] = useState("");
    const [third,setThird] = useState("");
    const [fourth,setFourth] = useState("");

    const [bannerJson,setBannerJson] = useState([]);

    useEffect(() => {
        console.log(bannerJson);

        // set the banner in db
        if (bannerJson.length > 0) {
            setDoc(doc(db,"banners","banners"),{
                banners: bannerJson
            })
        }

    },[bannerJson])

    const handleSubmitBanner = (e) => {
        e.preventDefault();

        const temp = [first,second,third,fourth];
        setBannerJson(temp);

        toast.success("added banner sucessfully");

        setFirst("");
        setSecond("");
        setThird("");
        setFourth("");
    }

    const handleFirstChange = (e) => {
        setFirst(e.target.value);
    }

    const handleSecondChange = (e) => {
        setSecond(e.target.value);
    }

    const handleThirdChange = (e) => {
        setThird(e.target.value);
    }

    const handleFourthChange = (e) => {
        setFourth(e.target.value);
    }

    return (
        <div className="w-full mx-auto my-10" id="banner">
            <h2 className="text-2xl font-bold my-5 md:text-4xl">MOVIE BANNER SECTION</h2>

            <form onSubmit={handleSubmitBanner} className="w-[80%] mx-auto my-20 flex flex-col items-center justify-center gap-10 ">
                <label htmlFor="first" className="text-xl -mb-8 font-bold md:text-2xl">First Banner Source</label>
                <input type="text" onChange={handleFirstChange} value={first} id="first" name="first" placeholder="first banner src" className="text-xl w-full  font-bold indent-2 rounded-md border-2 border-gray-500 py-3" required />

                <label htmlFor="second" className="text-xl -mb-8 font-bold md:text-2xl">Second Banner Source</label>
                <input type="text" onChange={handleSecondChange} value={second} id="second" name="second" placeholder="second banner src" className="text-xl w-full  font-bold indent-2 rounded-md border-2 border-gray-500 py-3" required />

                <label htmlFor="third" className="text-xl -mb-8 font-bold md:text-2xl">Third Banner Source</label>
                <input type="text" onChange={handleThirdChange} value={third} id="third" name="third" placeholder="third banner src" className="text-xl  w-full font-bold indent-2 rounded-md border-2 border-gray-500 py-3" required />

                <label htmlFor="fourth" className="text-xl -mb-8 font-bold md:text-2xl">Fourth Banner Source</label>
                <input type="text" onChange={handleFourthChange} value={fourth} id="fourth" name="fourth" placeholder="third banner src" className="text-xl  w-full font-bold indent-2 rounded-md border-2 border-gray-500 py-3" required />

                <button type="submit" className="text-xl sm:text-2xl bg-green-500 cursor-pointer hover:text-white px-5 py-3 rounded-md">
                    Submit Banner
                </button>
            </form>
        </div>
    )
}

export default Admin;