"use client"
import { Card } from '@/components/Card'

import React, { useEffect, useState } from 'react'
const Page = () => {
  const [categories, setcategories] = useState<any>([]);
  const [isloading, setLoading] = useState(true);
  useEffect(() => {

    async function getcategories() {
      try {
        let url = '/api/category';
        let req = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        if (!req.ok) {
          throw new Error('Network response was not ok');
        }
        let res = await req.json();
        setcategories(res)
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    getcategories();
  }, [])
 


  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-16">
      <h2 className="font-bold text-2xl mb-4 text-white text-center">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isloading
          ? Array(4)
            .fill(0)
            .map((d, i) => <SkeletonCard key={i} />) : categories.data && categories.data.map((current: any, index: any) => {
              return (
                <>

                  <div className="bg-[#202938] capitalize text-center rounded-md px-8 py-4" key={index}>{current}</div>
                </>
              )
            })}

      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className=" shadow rounded-md p-4 max-w-lg w-full mx-auto">
      <div className=" animate-pulse  flex space-x-4">

        <div className="flex-1 space-y-3 py-1 w-20">

          <div className="h-2 bg-slate-700 rounded"></div>

          <div className="space-y-3">

            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page