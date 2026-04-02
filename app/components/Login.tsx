"use client"
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
import { useTheme } from '../themeContext'

const loginSchema = z.object({
    username: z.string().min(3, "username must be at least 3 characters long"),
    password: z.string().min(4, "password must be at least 4 characters long"),
});

const registerSchema = z.object({
    username: z.string().min(3, "username must be at least 3 characters long"),
    email: z.string().email("must be a valid email").min(4, "must be a valid email"),
    password: z.string().min(4, "password must be at least 4 characters long"),
    confirmPass: z.string(),
}).refine((data) => data.password === data.confirmPass, { message: "passwords donot match", path: ["confirmPass"] });

type LoginInputs = z.infer<typeof loginSchema>;
type RegisterInputs = z.infer<typeof registerSchema>;

function Login() {

    const { theme, toggleTheme } = useTheme();

    const {
        register: registerLogin,
        handleSubmit: handleLoginSubmit,
        formState: { errors: loginErrors }
    } = useForm<LoginInputs>({ resolver: zodResolver(loginSchema) });

    const {
        register: registerSignup,
        handleSubmit: handleSignupSubmit,
        formState: { errors: signupErrors }
    } = useForm<RegisterInputs>({ resolver: zodResolver(registerSchema) });

    const onLoginSubmit: SubmitHandler<LoginInputs> = (data) => console.log("Login data:", data)
    const onRegisterSubmit: SubmitHandler<RegisterInputs> = (data) => console.log("Register data:", data)

    return (
        <main className="tracking-wide font-mono flex h-full w-full">
            <div className="left hidden md:block md:w-1/2 md:h-full">
                <div className="relative w-full h-full">
                    <Image
                        src={`${theme === 'dark' ? '/images/orng-dark.jpg' : '/images/orng.jpg'}`}
                        // src="/images/orng.jpg"
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

            <div className={`right w-full md:w-2/3 lg:w-1/2 flex justify-center items-center flex-col bg-background ${theme === 'dark' ? 'dark' : ''}`}>
                {/* <div className="welcome font-serif text-4xl italic mb-4 text-blutxt font-semibold">Welcome <span className='not-italic'>back</span></div> */}
                <Card className={`w-4/5 md:w-2/3 lg:w-1/2 px-4 py-4`}>
                    <CardContent>
                        <Tabs>
                            <TabsList variant="line" className="my-4">
                                <TabsTrigger value="login" className="bg-primary font-bold text-base">Login</TabsTrigger>
                                <TabsTrigger value="register" className="bg-primary font-bold text-base">Register</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login" className="flex flex-col gap-4">
                                <form onSubmit={handleLoginSubmit(onLoginSubmit)}>

                                    <div className='flex flex-col text-col mb-2'>
                                        <label htmlFor="" className='text-blutxt'>username</label>
                                        <Input type='text' className='rounded-sm' {...registerLogin("username")}></Input>
                                        <div className="err text-xs text-destructive tracking-tighter">{loginErrors.username && <p>{loginErrors.username.message}</p>}</div>
                                    </div>
                                    <div className='flex flex-col text-primary-text mb-2'>
                                        <label htmlFor="" className='text-blutxt'>password</label>
                                        <Input type='password' className='rounded-sm' {...registerLogin("password")}></Input>
                                        <div className="err text-xs text-destructive tracking-tighter">{loginErrors.password && <p>{loginErrors.password.message}</p>}</div>

                                    </div>
                                    <Button size="lg" type='submit' className="w-full bg-primary font-bold flex items-center">
                                        <span>login</span>
                                        <HugeiconsIcon icon={ArrowRight01Icon} size={32}
                                            color="currentColor"
                                            strokeWidth={3} />
                                    </Button>

                                </form>
                            </TabsContent>
                            <TabsContent value="register" className="flex flex-col gap-2">
                                <form onSubmit={handleSignupSubmit(onRegisterSubmit)}>

                                    <div className='flex flex-col mb-2'>
                                        <label htmlFor="" className='text-blutxt'>username</label>
                                        <Input type='text' className='rounded-sm' {...registerSignup("username")}></Input>
                                        <div className="err text-xs text-destructive tracking-tighter">{signupErrors.username && <p>{signupErrors.username.message}</p>}</div>
                                    </div>
                                    <div className='flex flex-col mb-2'>
                                        <label htmlFor="" className='text-blutxt'>email</label>
                                        <Input type='email' className='rounded-sm' {...registerSignup("email")}></Input>
                                        <div className="err text-xs text-destructive tracking-tighter">{signupErrors.email && <p>{signupErrors.email.message}</p>}</div>
                                    </div>
                                    <div className='flex flex-col mb-2'>
                                        <label htmlFor="" className='text-blutxt'>password</label>
                                        <Input type='password' className='rounded-sm' {...registerSignup("password")}></Input>
                                        <div className="err text-xs text-destructive tracking-tighter">{signupErrors.password && <p>{signupErrors.password.message}</p>}</div>
                                    </div>
                                    <div className='flex flex-col mb-2'>
                                        <label htmlFor="" className='text-blutxt'>re-enter Password</label>
                                        <Input type='password' className='rounded-sm' {...registerSignup("confirmPass")}></Input>
                                        <div className="err text-xs text-destructive tracking-tighter">{signupErrors.confirmPass && <p>{signupErrors.confirmPass.message}</p>}</div>
                                    </div>
                                    <Button size="lg" type="submit" className="w-full bg-primary font-bold flex items-center">
                                        <span>create</span>
                                        <HugeiconsIcon icon={AddCircleIcon} size={24}
                                            color="currentColor"
                                            strokeWidth={3} />
                                    </Button>
                                </form>
                            </TabsContent>
                        </Tabs>
                        <div className="forgot py-4">
                            <Link href="#" className='text-blutxt/80'>
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