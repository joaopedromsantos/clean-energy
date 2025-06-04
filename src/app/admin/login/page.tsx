"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginData } from "@/schemas/loginSchema";
import { useState } from "react";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });

    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (data: LoginData) => {
        setErrorMessage(""); 

        const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (result?.error) {
            setErrorMessage(result.error);
        } else {
            redirect("/admin");
        }
    };

    return (
        <section className="flex flex-col min-h-screen bg-offwhite-custom text-dark-custom">
            <main className="flex-grow flex items-center justify-center px-8">
                <div className="relative max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex flex-row items-center justify-center gap-2.5 mb-12 w-68 bg-dark-custom p-4 rounded-lg shadow-lg">
                        <Image
                            src="/images/logo.svg"
                            alt="Clean Energy Logo"
                            width={42}
                            height={42}
                            priority
                        />
                        <h4 className="font-bold text-xl text-white">Clean Energy</h4>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-6 mt-8">Sign in</h2>

                    {errorMessage && (
                        <p className="mb-4 text-red-500 text-sm mt-1 p-2 text-center bg-rose-100 rounded-md">{errorMessage}</p>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email")}
                                className={`mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-accent-custom"}`}
                                placeholder="email@example.com"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                {...register("password")}
                                className={`mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-accent-custom"}`}
                                autoComplete="current-password"
                                placeholder="********"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-2 px-4 rounded-lg bg-accent-custom text-white hover:bg-green-600 cursor-pointer transition duration-200"
                        >
                            {isSubmitting ? "Checking..." : "Login"}
                        </button>
                    </form>
                </div>
            </main>
        </section>
    );
}
