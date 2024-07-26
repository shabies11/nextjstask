import { LoginForm } from '@/components/LoginForm'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

function page() {
    return (
        <>
            <style>
                {`
                        .menu-items {
                            display: none !important;
                        } 
                    `}
            </style>
            <div className='min-h-[90vh] py-4 w-full   flex items-center'>
                <div className="">
                    <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                    <Spotlight className='top-10 left-full  h-[80vh] w-[50vw]' fill="purple" />
                    <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
                </div>
                <LoginForm />
            </div>
        </>
    )
}

export default page