"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/providers/slice/CartSlice";
import { toast } from "react-toastify";
export function Card({product}:any) {
  const dispatch = useDispatch();
  const addToCartItem = ()=>{
    let response = dispatch(addToCart(product));
    if(response){
      toast.success('Product added to cart successfully');
    }
  }
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#202938] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        
        <CardItem translateZ="100" className="w-full my-4">
          <Image
            src={product.image}
            height="1000"
            width="1000"
            className="h-60 w-full  rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 capitalize dark:text-white"
        >
          {product.category}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm h-4 overflow-hidden  max-w-sm mt-2 dark:text-neutral-300"
        >
         {product.title}
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
           
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {'$' +product.price}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={addToCartItem}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Add to Cart
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
