"use client"
import React from 'react'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function Login() {
    const [mode, setMode] = useState('login');

    return (
        <main className='tracking-wide font-sans flex h-full w-full'>
            <div className="left w-1/2">
                <img src="/images/orng.jfif" className='object-scale-down'></img>
            </div>
            <div className="right w-1/2 flex justify-center items-center flex-col">
                {/* <div className="tabs flex gap-2 border-2 py-1 px-1 rounded-md text-lg">
                    <div className="login-tab w-1/2 p-0.5 px-6 bg-primary text-background rounded-sm">Login</div>
                    <div className="register-tab w-1/2 p-0.5 px-6 rounded-sm">Register</div>
                </div> */}
                <Card className='w-1/2 px-4 py-4'>
                    <CardContent>
                        <Tabs>
                            <TabsList variant="line" className="my-4">
                                <TabsTrigger value="login" className="bg-primary font-normal text-base">Login</TabsTrigger>
                                <TabsTrigger value="register" className="bg-primary font-normal text-base">Register</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login" className="flex flex-col gap-4">
                                <div className='flex flex-col'>
                                    <label htmlFor="">Username</label>
                                    <Input type='text' className='rounded-sm'></Input>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="">Password</label>
                                    <Input type='password' className='rounded-sm'></Input>
                                </div>
                                <Button size="lg" className="w-full bg-primary">Login</Button>
                            </TabsContent>
                            <TabsContent value="register">
                                <div className='flex flex-col'>
                                    <label htmlFor="">Username</label>
                                    <Input type='text' className='rounded-sm'></Input>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="">Password</label>
                                    <Input type='password' className='rounded-sm'></Input>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <div className="forgot py-4">
                            Forgot password ?
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

export default Login