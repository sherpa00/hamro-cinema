import './App.css';
import React,{useEffect} from 'react';
//import AboutUs from './components/about-us';
//import Contact from './components/contact';
import Footer from './components/footer';
import Navbar from './components/navbar';
//import MoveiDetail from './components/MovieDetail';
import {Routes,Route} from "react-router-dom";
//import Home from './components/home';
//import Login from './components/login';
//import Admin from './components/admin';
//import Movies from './components/allMovies';
import {useDispatch} from "react-redux"
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase/firebaseFirestore';
import { addNowShowing } from './slices/nowshowing';
import { addUpComing } from './slices/upcoming';
import Loader from './components/loader';


const Home = React.lazy(() => import("./components/home"));
const AboutUs = React.lazy(() => import("./components/about-us"));
const Contact = React.lazy(() => import("./components/contact"));
const MoveiDetail = React.lazy(() => import("./components/MovieDetail"));
const Admin = React.lazy(() => import("./components/admin"));
const Movies = React.lazy(() => import("./components/allMovies"));
const Login = React.lazy(() => import("./components/login"))


function App() {

  const dispatch = useDispatch();

  // fetch the data from the database here
  useEffect(() => {

    getDoc(doc(db,"movies","now-showing"))
    .then((data) => {
      const fetchedData = data.data().movies;
      dispatch(addNowShowing(fetchedData))
    }).catch((error) => {
      console.log(error);
    })

    getDoc(doc(db,"movies","up-coming"))
    .then((data) => {
      const fetchedData = data.data().movies;
      dispatch(addUpComing(fetchedData))
    }).catch((error) => {
      console.log(error);
    })

  },[])




  return (
    <div className="App">
      <Navbar/>
      <React.Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about-us' element={<AboutUs/>}></Route>
          <Route path="/movie/*" element={<MoveiDetail/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="/contact-us" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
      </React.Suspense>


      <Footer/>
    </div>
  );
}

export default App;
