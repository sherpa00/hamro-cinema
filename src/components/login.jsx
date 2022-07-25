import { auth } from "../firebase/firebaseAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { addToken } from "../slices/token";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast,Toaster } from "react-hot-toast";

function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
        setEmail("")
        setPassword("");
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {

            const user = userCredential.user;
            // add user uid to token

            dispatch(addToken(user.uid))

            toast.success("Login Sucessfull");

            setTimeout(() => {
                navigate("/admin");
            },1500)
        })
        .catch((error) => {
            const errorMsg = error.code.split("/");

            toast.error(errorMsg);
        })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return ( 

        <div className="w-full h-screen">
            <Toaster/>
            <h2 className="text-4xl font-bold my-20">
                Welcome Back 
            </h2>


            <form className=" w-[90%] mx-auto border-[5px] rounded-lg border-purple-500 flex flex-col justify-center items-start p-4 md:w-[80%] md:p-10" onSubmit={handleSubmit}>
                <label htmlFor="email" className="w-full text-xl leading-[20px] mt-5 mb-2 md:text-2xl">Your Email<br></br>
                </label>

                <input type="email" value={email} onChange={handleEmailChange} id="email" name="email" className="w-full border-[3px] border-purple-400 text-xl md:text-2xl py-2 indent-4" required/>

                <label htmlFor="password" className="w-full text-xl mt-14 mb-2 md:text-2xl">Your Password<br></br>
                </label>

                <input type="password" value={password} onChange={handlePasswordChange} id="password" name="password" className="w-full border-[3px] border-purple-400 text-xl md:text-2xl py-2 indent-4" required/>

                <button type="submit" className="bg-purple-400 mx-auto mt-10 rounded-md px-4 py-3 text-center cursor-pointer hover:bg-green-500 text-xl">
                    LOGIN
                </button>
            </form>
        </div>
     );
}

export default Login;