import loader from "../images/loader.gif"

function Loader() {
    return ( 
        <div className="bg-white w-full">
            <img src={loader} alt="loader" className="w-2/3 mx-auto"/>
        </div>
     );
}

export default Loader;