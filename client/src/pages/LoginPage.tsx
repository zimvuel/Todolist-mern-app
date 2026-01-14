import { useState } from "react"
import { Link, useNavigate } from "react-router";
import type { LoginParams } from "../types/CardTypes";
import { loginApi } from "../services/authServices";
import { useSWRConfig } from "swr";
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate();
    const { mutate } = useSWRConfig();

    const [formData, setFormData] = useState<LoginParams>({
            identifier: "",
            password: "",
        });

    const handleLogin = async () => {
        try {
            await loginApi(formData);
    
            await mutate("todos");

            navigate("/");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || "An error occurred";
                alert(message);
            } else {
                alert("An error occurred");
                console.error(error);
            }
        }
    }

    return (
        <div className="flex h-screen w-screen bg-gray-200 items-center justify-center dark:bg-black-mode dark:text-white">
            <div className="flex flex-col items-center justify-start bg-white rounded-2xl w-lg h-auto gap-6 dark:border-2 dark:border-white dark:bg-black-mode">
                <div className="text-2xl font-medium flex pt-4">
                    Login
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl">Username/email</p>
                    <div className="outline outline-primary-purple rounded-md">
                        <input 
                            type="text"
                            placeholder="Input Username or Email"
                            value={formData.identifier}
                            onChange={(e) => setFormData({...formData, identifier: e.target.value})}
                            className="overflow-y-auto outline-none w-md h-10 placeholder: pl-2 text-lg text-primary-purple/80 caret-primary-purple
                            dark:text-white dark:caret-white"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl">Password</p>
                    <div className="outline outline-primary-purple rounded-md">
                        <input 
                            type="password"
                            placeholder="Input Password"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            className="overflow-y-auto outline-none w-md h-10 placeholder: pl-2 text-lg text-primary-purple/80 caret-primary-purple
                            dark:text-white dark:caret-white"
                        />
                    </div>
                </div>
                <div className="flex justify-around w-full mb-4 gap-8 mt-6">
                    <Link to="/">
                        <button 
                            className="px-8 py-2 outline-primary-purple outline text-primary-purple font-medium rounded-md
                                        hover:bg-primary-purple hover:text-white"
                        >
                            CANCEL
                        </button>   
                    </Link>
                    <button 
                        onClick={() => 
                            handleLogin()
                        }
                        className="px-8 py-2 bg-primary-purple text-white font-medium rounded-md
                                    hover:outline-primary-purple hover:outline hover:text-primary-purple hover:bg-white dark:hover:bg-black-mode"
                    >
                        APPLY
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage