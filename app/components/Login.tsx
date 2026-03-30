"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon, AddCircleIcon } from '@hugeicons/core-free-icons'
import Link from 'next/link'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type loginInputs = {
    username: string,
    password: string,
}

type resgiterInputs = {
    username: string,
    email: string,
    password: string,
    password2: string,
}

const schema = z.object({
    username: z.string().min(3, "username must be at least 3 characters long"),
    password: z.string().min(4, "password must be at least 4 characters long"),
    confirmPass: z.string(),
    email: z.email().min(4, "must be a valid email"),
})

function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<loginInputs> = (data) => console.log(data)

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

                <Card className='w-4/5 md:w-2/3 lg:w-1/2 px-4 py-4'>
                    <CardContent>
                        <Tabs>
                            <TabsList variant="line" className="my-4">
                                <TabsTrigger value="login" className="bg-primary font-bold text-base">Login</TabsTrigger>
                                <TabsTrigger value="register" className="bg-primary font-bold text-base">Register</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login" className="flex flex-col gap-4">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className='flex flex-col text-primary mb-2'>
                                        <label htmlFor="">username</label>
                                        <Input type='text' className='rounded-sm' {...register("username")}></Input>
                                        <div className="err text-xs text-orange-600 tracking-tighter">{errors.username && <p>{errors.username.message}</p>}</div>
                                    </div>
                                    <div className='flex flex-col text-primary mb-2'>
                                        <label htmlFor="">password</label>
                                        <Input type='password' className='rounded-sm' {...register("password")}></Input>
                                        <div className="err text-xs text-orange-600 tracking-tighter">{errors.password && <p>{errors.password.message}</p>}</div>

                                    </div>
                                    <Button size="lg" type='submit' className="w-full bg-primary font-bold">
                                        login
                                        <HugeiconsIcon icon={ArrowRight01Icon} size={28}
                                            color="currentColor"
                                            strokeWidth={3} />
                                    </Button>

                                </form>
                            </TabsContent>
                            <TabsContent value="register" className="flex flex-col gap-2">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className='flex flex-col text-primary'>
                                        <label htmlFor="">username</label>
                                        <Input type='text' className='rounded-sm' {...register("username")}></Input>
                                        <div className="err text-xs text-orange-600 tracking-tighter">{errors.username && <p>{errors.username.message}</p>}</div>
                                    </div>
                                    <div className='flex flex-col text-primary'>
                                        <label htmlFor="">email</label>
                                        <Input type='email' className='rounded-sm' {...register("email")}></Input>
                                        <div className="err text-xs text-orange-600 tracking-tighter">{errors.email && <p>{errors.email.message}</p>}</div>
                                    </div>
                                    <div className='flex flex-col text-primary'>
                                        <label htmlFor="">password</label>
                                        <Input type='password' className='rounded-sm' {...register("password")}></Input>
                                        <div className="err text-xs text-orange-600 tracking-tighter">{errors.password && <p>{errors.password.message}</p>}</div>
                                    </div>
                                    <div className='flex flex-col text-primary'>
                                        <label htmlFor="">re-enter Password</label>
                                        <Input type='password' className='rounded-sm' {...register("confirmPass")}></Input>
                                        <div className="err text-xs text-orange-600 tracking-tighter">{errors.confirmPass && <p>{errors.confirmPass.message}</p>}</div>
                                    </div>
                                    <Button size="lg" type="submit" className="w-full bg-primary font-bold">create account
                                        <HugeiconsIcon icon={AddCircleIcon} size={24}
                                            color="currentColor"
                                            strokeWidth={3} />
                                    </Button>
                                </form>
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