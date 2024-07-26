'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Payment = () => {

    const handlepayment = (e:any) => {
        e.preventDefault();
        alert('payment Method is not supported, right now.')
    } 
    const items = useSelector((state: any) => state.cart.items);

    const calculateTotal = (items: any) => {
        const subtotal = items.reduce((acc: number, item: any) => acc + (item.price*item.quantity), 0);
        const shipping = 4.99; // Fixed shipping cost
        const total = subtotal + shipping;
        return {
            subtotal,
            shipping,
            total: total.toFixed(2) + " USD"
        };
    };
    const { subtotal, shipping, total } = calculateTotal(items);
    
    return (
        <div className=''>

            <div className="flex flex-col md:flex-row bg-background px-4  rounded-lg shadow-lg">
                <div className="flex-1 mb-6 md:mr-6">
                     
                    <h2 className="text-2xl font-bold">Ecommerce Order</h2>
                    <p className="text-lg mt-2"><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
                    <p className="text-lg mt-2"><strong>Shipping:</strong> ${shipping}</p>
                    <p className="text-lg mt-2"><strong>Total: </strong> ${total}</p>
                    <p className="text-md text-muted-foreground">Order from Ecommerce</p>
                    <div className="mt-4">
                        <img aria-hidden="true" alt="payment illustration" src="https://openui.fly.dev/openui/300x300.svg?text=Illustration" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">Powered by Stripe</p>
                    <p className="text-xs text-muted-foreground">Terms | Privacy</p>
                </div>
                <div className="flex-1 shadow-md rounded-md bg-[#384152] p-5">
                    <h3 className="text-xl font-semibold mb-4">Pay with card</h3>
                    <form className='text-black' onSubmit={handlepayment} >
                        <div className="mb-4">
                            <label className="block text-sm text-white font-medium" >Email</label>
                            <input className="border border-border rounded-lg p-2 w-full" type="email" id="email" placeholder="you@example.com" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm text-white font-medium">Card information</label>
                            <input className="border border-border rounded-lg p-2 w-full mb-2" type="text" placeholder="1234 1234 1234 1234" required />
                            <div className="flex justify-between">
                                <input className="border border-border rounded-lg p-2 w-1/2 mr-2" type="text" placeholder="MM / YY" required />
                                <input className="border border-border rounded-lg p-2 w-1/2" type="text" placeholder="CVC" required />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm text-white font-medium"  >Cardholder name</label>
                            <input className="border border-border rounded-lg p-2 w-full" type="text" id="cardholder-name" placeholder="Full name on card" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm text-white font-medium" >Country or region</label>
                            <select className="border border-border rounded-lg p-2 w-full" id="country" required>
                                <option value="Pakistan">Pakistan</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                            </select>
                        </div>
                        <button className="mt-4 w-full bg-blue text-primary-foreground p-2 rounded px-12 py-4 rounded-full bg-[#2d73ecbb] font-bold text-white tracking-widest shadow-md uppercase transform hover:scale-105 hover:bg-[#fff] hover:text-[#000] transition-colors duration-400 lg:text-xl text-[14px]" type="submit">Donate ${total}</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Payment