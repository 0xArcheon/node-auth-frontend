"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon, AddCircleIcon } from '@hugeicons/core-free-icons'
import Link from 'next/link'
import Image from 'next/image'

function Login() {

    return (
        <main className='tracking-wide font-mono flex h-full w-full'>
            <div className="left hidden md:block md:w-1/2 md:h-full">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/orng.jpg"
                        alt="orange"
                        fill
                        className="object-cover"
                    />
                    <div className="tagline absolute inset-0 font-serif text-background flex items-end">
                        <div className='text-6xl italic my-6 ml-4'>
                            Auth <span className='not-italic text-4xl'>made simple</span>
                            {/* <span className='font-mono not-italic text-4xl tracking-tighter'>made simple</span> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="right w-full md:w-2/3 lg:w-1/2 flex justify-center items-center flex-col">
                {/* <div className="tabs flex gap-2 border-2 py-1 px-1 rounded-md text-lg">
                    <div className="login-tab w-1/2 p-0.5 px-6 bg-primary text-background rounded-sm">Login</div>
                    <div className="register-tab w-1/2 p-0.5 px-6 rounded-sm">Register</div>
                </div> */}
                <Card className='w-4/5 md:w-2/3 lg:w-1/2 px-4 py-4'>
                    <CardContent>
                        <Tabs>
                            <TabsList variant="line" className="my-4">
                                <TabsTrigger value="login" className="bg-primary font-bold text-base">Login</TabsTrigger>
                                <TabsTrigger value="register" className="bg-primary font-bold text-base">Register</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login" className="flex flex-col gap-4">
                                <div className='flex flex-col text-primary'>
                                    <label htmlFor="">username</label>
                                    <Input type='text' className='rounded-sm'></Input>
                                    <div className="err hidden"></div>
                                </div>
                                <div className='flex flex-col text-primary'>
                                    <label htmlFor="">password</label>
                                    <Input type='password' className='rounded-sm'></Input>
                                    <div className="err hidden"></div>
                                </div>
                                <Button size="lg" className="w-full bg-primary font-bold">
                                    login
                                    <HugeiconsIcon icon={ArrowRight01Icon} size={28}
                                        color="currentColor"
                                        strokeWidth={3} />
                                </Button>
                            </TabsContent>
                            <TabsContent value="register" className="flex flex-col gap-2">
                                <div className='flex flex-col text-primary'>
                                    <label htmlFor="">username</label>
                                    <Input type='text' className='rounded-sm'></Input>
                                    <div className="err hidden"></div>
                                </div>
                                <div className='flex flex-col text-primary'>
                                    <label htmlFor="">email</label>
                                    <Input type='email' className='rounded-sm'></Input>
                                    <div className="err hidden"></div>
                                </div>
                                <div className='flex flex-col text-primary'>
                                    <label htmlFor="">password</label>
                                    <Input type='password' className='rounded-sm'></Input>
                                    <div className="err hidden"></div>
                                </div>
                                <div className='flex flex-col text-primary'>
                                    <label htmlFor="">re-enter Password</label>
                                    <Input type='password' className='rounded-sm'></Input>
                                    <div className="err hidden"></div>
                                </div>
                                <Button size="lg" className="w-full bg-primary font-bold">create account
                                    <HugeiconsIcon icon={AddCircleIcon} size={24}
                                        color="currentColor"
                                        strokeWidth={3} />
                                </Button>

                            </TabsContent>
                        </Tabs>
                        <div className="forgot py-4">
                            <Link href="#" className='text-blue-800'>
                                <u>Forgot password ?</u>
                            </Link>

                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

export default Login