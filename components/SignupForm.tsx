"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import '../app/globals.css';
import Link from "next/link"; 
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function SignupForm() {

  
  const [data, setData] = useState<{ [key: string]: any }>({});
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {


      let url = '/api/register';
      let userInfo = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      let response = await userInfo.json();


      if (response.status == true) {

        alertMessage(response.message, 'success')
        router.push('/login')
      } else {

        alertMessage(response.message, 'error')
      }

    } catch (error) {

      alertMessage('something went wrong', 'error')
    } finally {
      setLoading(false);
      return;
    }

  };



  function alertMessage(message: string, type: string) {
    if (type == "success") {
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });

    } else if (type == "error") {
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
    }
  }
  return (
    <div className="max-w-md w-full mx-auto rounded-none   md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-[#202938]">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Create an account
      </h2>


      <form className="mt-8 mb-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <input name="firstname" id="firstname" placeholder="Tyler" className="input-style" type="text" onChange={handleChange} />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <input name="lastname" id="lastname" placeholder="Durden" className="input-style" type="text" onChange={handleChange} required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <input name="email" id="email" placeholder="projectmayhem@fc.com" className="input-style" type="email" onChange={handleChange} required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <input name="password" id="password" placeholder="••••••••" className="input-style" type="password" onChange={handleChange} required />
        </LabelInputContainer>


        <button
          className="mt-2 bg-gradient-to-br border bg-transparent relative group/btn    w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >

          {loading ? 'Creating an account...' : 'Create an account'}
        </button>

        <p className="text-neutral-600 text-sm  max-w-sm mt-4 dark:text-neutral-300">
          <span className="opacity-[0.5]">Already have an account? </span> <Link href="/login" className="opacity-[1] 2xl:"> Login here</Link>
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
