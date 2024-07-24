"use client";
import React from "react";
import { Label } from "./ui/label"; 
import { cn } from "@/lib/utils"; 
import '../app/globals.css';
import Link from "next/link";
 

export function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none   md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-[#202938]">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Sign in to your account
      </h2>
     

      <form className="my-8" onSubmit={handleSubmit}>
        
        <LabelInputContainer className="mb-6">
          <Label htmlFor="email">Email Address</Label>
          <input id="email" placeholder="projectmayhem@fc.com" className="input-style" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="password">Password</Label>
          <input id="password" placeholder="••••••••" className="input-style" type="password" />
        </LabelInputContainer>
      

        <button
          className="mt-2 bg-gradient-to-br border bg-transparent relative group/btn    w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
            Sign in
         
        </button>

        <p className="text-neutral-600 text-sm  max-w-sm mt-4 dark:text-neutral-300">
       <span className="opacity-[0.5]">Don&apos;t have an account yet? </span> <Link href="/signup" className="opacity-[1] 2xl:"> 
       Sign up</Link>
      </p>
        
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full mb-2", className)}>
      {children}
    </div>
  );
};
