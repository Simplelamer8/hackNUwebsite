import React, { useEffect, useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Login() {
    const [form, setForm] = useState("login");
    const userName = useRef(null);
    const password = useRef(null);
    const repeatPassword = useRef(null);
    
    useEffect(() => {
        password.current.value = "";
    }, [form])

    function enterUser()
    {
        if (form === "login")
        {

        }
        else
        {
            if (password.current.value !== repeatPassword.current.value)
            {
                alert("Passwords are not equal!");
                return;
            }
        }
    }
    
    return (
    <div className="bg-[url('assets/backgroundLogin.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full flex justify-center items-center">
        <div className="loginCard backdrop-blur w-2/5 h-2/4 rounded-xl shadow-2xl flex flex-col items-center justify-around">
            <div className="buttons flex px-12 justify-around pt-6">
                <button onClick={() => setForm("login")} className='text-xl py-2 px-6 rounded-xl hover:text-white hover:bg-black'>Login</button>
                <button onClick={() => setForm("register")} className='text-xl py-2 px-6 rounded-xl hover:text-white hover:bg-black'>Register</button>
            </div>
            {
                form === "login" ? 
                <form className='w-2/4 flex flex-col justify-between h-24'>
                    <input ref={userName} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email..." required />
                    <input ref={password} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password..." required />
                </form>
                :
                <form className='w-2/4 flex flex-col justify-between h-36'>
                <input ref={userName} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email..." required />
                <input ref={password} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password..." required />
                <input ref={repeatPassword} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Repeat password..." required />
            </form>
            }
            <button type="button" className="btn btn-primary btn-md hover:bg-black" onClick={enterUser}>{form}</button>
        </div>
    </div>
  )
}
