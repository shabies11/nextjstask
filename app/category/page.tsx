"use client"
import { Card } from '@/components/Card'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [categories,setcategories] = useState<any>([]);
    useEffect(()=>{
        
        async function getcategories(){
            let url = '/api/category';
            let req = await fetch(url,{
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            });
            if (!req.ok) {
                throw new Error('Network response was not ok');
            }
            let res = await req.json();
            setcategories(res)
        }

        getcategories();
    },[])

    
    console.log(categories);


  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-16">
        <h2 className="font-bold text-2xl mb-4 text-white text-center">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.data && categories.data.map((current:any,index:any)=>{
            return(
                <>

                <div className="bg-[#202938] capitalize text-center rounded-md px-8 py-4" key={index}>{current}</div>
                </>
            )
        })}
        
        </div>
    </div>
  )
}

export default Page