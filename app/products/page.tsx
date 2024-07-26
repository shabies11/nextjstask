"use client"
import { Card } from '@/components/Card'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [product,setProducts] = useState<any>([]);
    const[isloading,setLoading] = useState(true);

    useEffect(()=>{
        
        async function getProducts(){
          try {
            let url = '/api/products';
            let req = await fetch(url,{
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            });
            if (!req.ok) {
                throw new Error('Network response was not ok');
            }
            let res = await req.json();
            setProducts(res)
          } catch (error) {
            
          }finally{
            setLoading(false);
          }
        }
        getProducts();
    },[])

     


  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        { isloading
        ? Array(12)
            .fill(0)
            .map((d, i) => <SkeletonCard key={i} />):product.data && product.data.map((current:any,index:any)=><Card key={index} product={current} />)}
        
        </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="border dark:border-white/[0.2] border-black/[0.1] shadow rounded-md p-4  h-[10rem] w-[20rem] lg:w-[25rem]"> 
      <div className=" animate-pulse  flex space-x-4">
        
        <div className="flex-1 space-y-9 py-1">
          {/* title */}
          <div className="h-2 bg-slate-700 rounded"></div>
          {/* discription */}
          <div className="space-y-5">
            <div className="grid grid-cols-4 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page