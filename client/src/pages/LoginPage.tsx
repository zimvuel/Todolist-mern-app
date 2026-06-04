import { useState } from "react"
import { Link, useNavigate } from "react-router";
import type { LoginParams } from "../types/AuthTypes";
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
    
    const [errorMsg, setErrorMsg] = useState("");
    
    const handleLogin = async () => {
        try {
            await loginApi(formData);

            await mutate("todos");

            navigate("/todos");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || "Login failed";
                setErrorMsg(message);
            } else {
                console.log("error in handle login", error);
                setErrorMsg("An error occurred");
            }
        }
    }

    return (
        <div className="flex min-h-dvh w-full items-center justify-center bg-gray-200 px-4 py-8 dark:bg-black-mode dark:text-white">
            <div className="flex w-full max-w-lg flex-col items-center justify-start rounded-2xl bg-white p-4 dark:border-2 dark:border-white dark:bg-black-mode sm:p-6">
                <div className="flex w-full justify-start">
                    <Link 
                        to="/register"
                        className="text-primary-purple font-medium hover:underline dark:text-white"    
                    >Register</Link>
                </div>
                <form 
                    onSubmit={(e)=> {
                        e.preventDefault();
                        handleLogin();
                    }}
                    className="flex w-full flex-col items-center gap-5 sm:gap-6"
                >
                    <div className="flex pt-2 text-2xl font-medium sm:pt-4">
                        Login
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <p className="text-lg sm:text-xl">Username or Email</p>
                        <div className="rounded-md outline outline-primary-purple">
                            <input 
                                type="text"
                                placeholder="Input Username or Email"
                                value={formData.identifier}
                                onChange={(e) => setFormData({...formData, identifier: e.target.value})}
                                className="h-10 w-full min-w-0 px-3 text-base text-primary-purple/80 outline-none caret-primary-purple sm:text-lg
                                dark:text-white dark:caret-white"
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <p className="text-lg sm:text-xl">Password</p>
                        <div className="rounded-md outline outline-primary-purple">
                            <input 
                                type="password"
                                placeholder="Input Password"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                className="h-10 w-full min-w-0 px-3 text-base text-primary-purple/80 outline-none caret-primary-purple sm:text-lg
                                dark:text-white dark:caret-white"
                            />
                        </div>
                    </div>

                    {errorMsg && (
                        <p className="w-full text-center text-sm font-medium text-red-500">
                            {errorMsg}
                        </p>
                    )}

                    <div className="mt-4 flex w-full flex-col gap-3 sm:mt-6 sm:flex-row sm:justify-around sm:gap-8">
                        <Link to="/" className="w-full sm:w-auto">
                            <button
                                type="button" 
                                className="w-full rounded-md px-8 py-2 font-medium text-primary-purple outline outline-primary-purple
                                            hover:bg-primary-purple hover:text-white"
                            >
                                CANCEL
                            </button>   
                        </Link>
                        <button 
                            type="submit"
                            className="w-full rounded-md bg-primary-purple px-8 py-2 font-medium text-white sm:w-auto
                                        hover:outline-primary-purple hover:outline hover:text-primary-purple hover:bg-white dark:hover:bg-black-mode"
                        >
                            APPLY
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
