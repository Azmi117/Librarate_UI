import { useState } from "react";
import useAuthStore from "../store/store";
import { login } from "../Services/authServices";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setToken = useAuthStore((state) => state.setToken);
    const validateToken = useAuthStore((state) => state.validateToken);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const params = { email, password };
          const data = await login(params);
          if (data && data.token) {
            setToken(data.token); // Simpan token di store dan localStorage
            validateToken();
            navigate("/");
          } else {
            throw new Error("Invalid login response");
          }
        } catch (error) {
            console.error(error);
        }
      };
    

    return(
        <>
            <div className="w-screen min-h-screen bg-[#E1D7B7] flex justify-center items-center">
                <div className="w-80 h-80 bg-[#F0EBDB] bg-opacity-90 rounded-xl">
                    <form onSubmit={handleLogin}>
                    <div className="-mt-[5rem] ms-[6rem]">
                        <img src="./user.png" alt="" className="w-32"/>
                    </div>
                        <div className="flex justify-center mt-10">
                            <div>
                                <img src="https://www.svgrepo.com/show/522690/user.svg" alt="" className="w-9 bg-[#7C93C3] p-1"/>
                            </div>
                            <input type="email" className="w-56 h-9 bg-[#1E2A5E] amaranth-bold rounded-none caret-white px-1.5 text-white placeholder-white" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="flex justify-center mt-7">
                            <div>
                                <img src="https://www.svgrepo.com/show/505414/lock-off.svg" alt="" className="w-9 bg-[#7C93C3] p-1"/>
                            </div>
                            <input type="password" className="w-56 h-9 bg-[#1E2A5E] amaranth-bold rounded-none caret-white px-1.5 text-white placeholder-white" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <div className="flex justify-center mt-9">
                            <button type="submit" className="w-5/6 bg-[#ECE8E8] py-1 rounded-md amaranth-bold border border-slate-950 hover:bg-gray-300">Login</button>
                        </div>
                    <div className="flex justify-center mt-3">
                        <h1 className="poppins-regular text-sm">Don't have account?</h1>
                        <Link to={'/register'} className="poppins-regular text-sm ms-0.5 hover:underline hover:underline-offset-4 decoration-2">Register here</Link>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;