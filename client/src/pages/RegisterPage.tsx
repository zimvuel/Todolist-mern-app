import { useState } from "react";
import { Link, useNavigate } from "react-router";
import type { RegisterParams } from "../types/CardTypes";
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
            await registerApi(formData);
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
        <div className="flex h-screen w-screen bg-gray-200 items-center justify-center dark:bg-black-mode dark:text-white">
            <div className="flex flex-col items-center justify-start bg-white rounded-2xl w-lg h-auto dark:border-2 dark:border-white dark:bg-black-mode">
                <div className="flex justify-start w-full pl-4 pt-4">
                    <Link 
                        to="/login"
                        className="text-primary-purple font-medium hover:underline dark:text-white"    
                    >Login</Link>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <div className="text-2xl font-medium flex pt-4">
                        Register
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xl">Username</p>
                        <div className="outline outline-primary-purple rounded-md">
                            <input 
                                type="text"
                                required
                                placeholder="Input Username"
                                value={formData.username}
                                onChange={(e) => setFormData({...formData, username: e.target.value})}
                                className="overflow-y-auto outline-none w-md h-10 placeholder: pl-2 text-lg text-primary-purple/80 caret-primary-purple
                                dark:text-white dark:caret-white"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xl">Email</p>
                        <div className="outline outline-primary-purple rounded-md">
                            <input 
                                type="email"
                                required
                                placeholder="Input Email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="overflow-y-auto outline-none w-md h-10 placeholder: pl-2 text-lg text-primary-purple/80 caret-primary-purple
                                dark:text-white dark:caret-white"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <p className="text-lg">Password</p>
                            <div className="outline outline-primary-purple rounded-md">
                                <input 
                                    type="password"
                                    required
                                    placeholder="Input Password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    className="overflow-y-auto outline-none w-md h-10 placeholder: pl-2 text-lg text-primary-purple/80 caret-primary-purple
                                    dark:text-white dark:caret-white"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-lg">Confirm Password</p>
                            <div className="outline outline-primary-purple rounded-md">
                                <input 
                                    type="password"
                                    required
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                    className="overflow-y-auto outline-none w-md h-10 placeholder: pl-2 text-lg text-primary-purple/80 caret-primary-purple
                                    dark:text-white dark:caret-white"
                                />
                            </div>
                        </div>
                    </div>

                    {errorMsg && (
                        <p className="text-red-500 text-sm font-medium w-md text-center">
                            {errorMsg}
                        </p>
                    )}

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
                                handleRegister()
                            }
                            className="px-8 py-2 bg-primary-purple text-white font-medium rounded-md
                                        hover:outline-primary-purple hover:outline hover:text-primary-purple hover:bg-white dark:hover:bg-black-mode"
                        >
                            APPLY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
