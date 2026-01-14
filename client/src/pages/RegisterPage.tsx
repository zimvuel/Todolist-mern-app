import { useState } from "react";
import { Link, useNavigate } from "react-router";
import type { RegisterParams } from "../types/CardTypes";
import { registerApi } from "../services/authServices";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<RegisterParams>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleRegister =  async () => {
        try {
            await registerApi(formData);
            navigate("/login");
        } catch (error) {
            console.log("error in handle register", error);
        }
    }
    
    return (
        <div className="flex h-screen w-screen bg-gray-200 items-center justify-center dark:bg-black-mode dark:text-white">
            <div className="flex flex-col items-center justify-start bg-white rounded-2xl w-lg h-auto gap-6 dark:border-2 dark:border-white dark:bg-black-mode">
                <div className="text-2xl font-medium flex pt-4">
                    Register
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl">Username</p>
                    <div className="outline outline-primary-purple rounded-md">
                        <input 
                            type="text"
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
                            type="text"
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
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                className="overflow-y-auto outline-none w-md h-10 placeholder: pl-2 text-lg text-primary-purple/80 caret-primary-purple
                                dark:text-white dark:caret-white"
                            />
                        </div>
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
    )
}

export default RegisterPage
