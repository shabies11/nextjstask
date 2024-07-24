"use client"
import React, { useState } from 'react'

const Cart = () => {
    const [count, setCount] = useState(1);
    return (


        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-16'>

            <h2 className="text-lg font-semibold mb-4 ">Cart Items</h2>

            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                    <div className="bg-white text-[#000] p-4 rounded-lg shadow-md mb-4">
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex items-start">
                                <img src="https://placehold.co/100x100" alt="Modern Ergonomic Office Chair" className="mr-4 rounded" />
                                <div>
                                    <h3 className="text-md font-medium cart-title">Modern Ergonomic Office Chair</h3>
                                    <span className="text-muted-foreground cart-subtotal">Subtotal: $71.00</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="item-counter">

                                    <button className="bg-secondary text-secondary-foreground p-1 " onClick={() => {
                                        if (count > 1) {
                                            setCount(count - 1)
                                        }
                                    }}>-</button>
                                    <span className="mx-2" >{count}</span>
                                    <button className="bg-secondary text-secondary-foreground p-1 " onClick={() => {
                                        setCount(count + 1)
                                    }}>+</button>
                                </div>
                                <button className="bg-destructive text-destructive-foreground p-1  ml-2">X</button>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="col-span-4 bg-white text-[#000] p-4 rounded-lg shadow-md">
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>$110.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>$4.99</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>$114.99 USD</span>
                    </div>
                    <span className="text-muted-foreground">including VAT</span>
                    
                    <button className="mt-4 w-full bg-blue text-primary-foreground p-2 rounded px-12 py-4 rounded-full bg-[#2d73ecbb] font-bold text-white tracking-widest shadow-md uppercase transform hover:scale-105 hover:bg-[#fff] hover:text-[#000] transition-colors duration-400">Check out</button>
                    
                     
                </div>
            </div>
        </div>

    )
}

export default Cart