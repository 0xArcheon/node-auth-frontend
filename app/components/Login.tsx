"use client"
import React from 'react'
import { useState } from 'react'

function Login() {
    const [mode, setMode] = useState('login');

    return (
        <main className='tracking-wide font-sans flex h-full w-full'>
            <div className="left w-1/2 bg-secondary">
            </div>
            <div className="right w-1/2 flex justify-center items-center flex-col">
                <div className="tabs flex gap-2 border-2 py-1 px-1 rounded-md text-lg">
                    <div className="login-tab w-1/2 p-0.5 px-6 bg-primary text-background rounded-sm">Login</div>
                    <div className="register-tab w-1/2 p-0.5 px-6 rounded-sm">Register</div>
                </div>
                {mode == 'login' ?
                    <div className='inputs py-8 text-md'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Username</label>
                            <input type='text' className='border-secondary border-2 rounded-sm'></input>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Password</label>
                            <input type='password' className='border-secondary border-2 rounded-sm'></input>
                        </div>
                    </div>
                    :
                    <div>Register</div>
                }
            </div>
        </main>
    )
}

export default Login