"use client"
import { Card } from '@/components/Card'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [product,setProducts] = useState<any>([]);
    useEffect(()=>{
        
        async function getProducts(){
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
        }

        getProducts();
    },[])

    
    console.log(product);


  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {product.data && product.data.map((current:any,index:any)=><Card key={index} product={current} />)}
        
        </div>
    </div>
  )
}

export default Page