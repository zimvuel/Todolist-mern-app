import { useState } from "react";
import { Link, useNavigate } from "react-router";
import type { RegisterParams } from "../types/AuthTypes";
import { registerApi } from "../services/authServices";
import axios from "axios";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<RegisterParams>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errorMsg, setErrorMsg] = useState("");

    const handleRegister =  async () => {
        setErrorMsg("");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMsg("Please enter a valid email address");
            return;
        }

        if (formData.password.length < 8) {
            setErrorMsg("Password must be at least 8 characters");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setErrorMsg("Passwords do not match");
            return;
        }

        try {
            await registerApi({
                username: formData.username, 
                email: formData.email, 
                password: formData.password,
            });
            navigate("/login");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || "Registration failed";
                setErrorMsg(message);
            } else {
                console.log("error in handle register", error);
                setErrorMsg("An error occurred");
            }
        }
    }
    
    return (
        <div className="flex min-h-dvh w-full items-center justify-center bg-gray-200 px-4 py-8 dark:bg-black-mode dark:text-white">
            <div className="flex w-full max-w-lg flex-col items-center justify-start rounded-2xl bg-white p-4 dark:border-2 dark:border-white dark:bg-black-mode sm:p-6">
                <div className="flex w-full justify-start">
                    <Link 
                        to="/login"
                        className="text-primary-purple font-medium hover:underline dark:text-white"    
                    >Login</Link>
                </div>
                <form 
                    onSubmit={(e)=> {
                        e.preventDefault();
                        handleRegister();
                    }} 
                    className="flex w-full flex-col items-center gap-5 sm:gap-6"
                >
                    <div className="flex pt-2 text-2xl font-medium sm:pt-4">
                        Register
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <p className="text-lg sm:text-xl">Username</p>
                        <div className="rounded-md outline outline-primary-purple">
                            <input 
                                type="text"
                                required
                                placeholder="Input Username"
                                value={formData.username}
                                onChange={(e) => setFormData({...formData, username: e.target.value})}
                                className="h-10 w-full min-w-0 px-3 text-base text-primary-purple/80 outline-none caret-primary-purple sm:text-lg
                                dark:text-white dark:caret-white"
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <p className="text-lg sm:text-xl">Email</p>
                        <div className="rounded-md outline outline-primary-purple">
                            <input 
                                type="email"
                                required
                                placeholder="Input Email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="h-10 w-full min-w-0 px-3 text-base text-primary-purple/80 outline-none caret-primary-purple sm:text-lg
                                dark:text-white dark:caret-white"
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <div className="flex w-full flex-col gap-2">
                            <p className="text-lg sm:text-xl">Password</p>
                            <div className="rounded-md outline outline-primary-purple">
                                <input 
                                    type="password"
                                    required
                                    placeholder="Input Password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    className="h-10 w-full min-w-0 px-3 text-base text-primary-purple/80 outline-none caret-primary-purple sm:text-lg
                                    dark:text-white dark:caret-white"
                                />
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <p className="text-lg sm:text-xl">Confirm Password</p>
                            <div className="rounded-md outline outline-primary-purple">
                                <input 
                                    type="password"
                                    required
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                    className="h-10 w-full min-w-0 px-3 text-base text-primary-purple/80 outline-none caret-primary-purple sm:text-lg
                                    dark:text-white dark:caret-white"
                                />
                            </div>
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

export default RegisterPage
