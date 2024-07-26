"use client"
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '@/providers/slice/CartSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

const Cart = () => {
    const items = useSelector((state: any) => state.cart.items) as CartItem[];
    const user = useSelector((state: any) => state.user);
    console.log(user);
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [counts, setCounts] = useState<{ [key: string]: number }>(() => {
        const initialCounts: { [key: string]: number } = {};
        items.forEach(item => {
            initialCounts[item.id] = item.quantity;
        });
        return initialCounts;
    });

    const calculateTotal = (items: CartItem[]) => {
        if (items.length === 0) {
            return {
                subtotal: 0,
                shipping: 'NA',
                total: "NA"
            };
        }

        const subtotal = items.reduce((acc: number, item: CartItem) => acc + (item.price * counts[item.id]), 0);
        const shipping = 4.99; // Fixed shipping cost
        const total = subtotal + shipping;
        const totalPayable = subtotal + shipping;

        return {
            subtotal,
            shipping,
            totalPayable,
            total: total.toFixed(2) + " USD"
        };
    };

    const { subtotal, shipping, total, totalPayable } = calculateTotal(items);

    const paynow = async () => {
        try {
            setLoading(true)
            let data = {
                name: 'user name',
                product: 'cart product',
                totalprice: totalPayable !== undefined ? Math.round(totalPayable) : 0,

            };
            // the error was comming,  so i convert this to integer
            let req = await fetch('/api/payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            let response = await req.json();
            if (response.success) {

                window.location.href = response.message.url;
            } else {
                toast.error('Payment failed. Please try again later.');
            }



        } catch (error) {
            console.error('Error in payment processing:', error);
            toast.error('Payment processing failed. Please try again later.');

        }finally{
            setLoading(false);
        }
    };

    const removeItem = (id: string) => {
        dispatch(removeFromCart(id));
        // Remove the count for the removed item
        setCounts(prevCounts => {
            const newCounts = { ...prevCounts };
            delete newCounts[id];
            return newCounts;
        });
    };

    const updateQuantity = (id: string, newCount: number, action: string) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [id]: newCount,
        }));
        if (action === 'add') {

            dispatch(incrementQuantity(id));
        } else {
            dispatch(decrementQuantity(id));
        }
    };

    return (
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-16'>
            <h2 className="text-lg font-semibold mb-4">Cart Items</h2>
            <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-8 col-span-12">
                    {items.length > 0 ? items.map((item: CartItem) => (
                        <div key={item.id} className="bg-white text-[#000] p-4 rounded-lg shadow-md mb-4">
                            <div className="flex items-start justify-between lg:flex-row flex-col mb-2">
                                <div className="flex items-start">
                                    <Image src={item.image} height={100} width={100} alt={item.title} className="mr-4 rounded" />
                                    <div>
                                        <h3 className="text-md font-medium cart-title max-w-[24rem]">{item.title}</h3>
                                        <span className="text-muted-foreground cart-subtotal">
                                            Subtotal: ${item.price} <strong>X</strong> {counts[item.id]} <strong>=</strong> ${(item.price * counts[item.id]).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center ms-auto">
                                    <div className="item-counter">
                                        <button className="bg-secondary text-secondary-foreground p-1" onClick={() => {
                                            if (counts[item.id] > 1) {
                                                updateQuantity(item.id, counts[item.id] - 1, 'remove');
                                            }
                                        }}>-</button>
                                        <span className="mx-2">{counts[item.id]}</span>
                                        <button className="bg-secondary text-secondary-foreground p-1" onClick={() => {
                                            updateQuantity(item.id, counts[item.id] + 1, 'add');
                                        }}>+</button>
                                    </div>
                                    <button className="bg-destructive text-destructive-foreground p-1 ml-2" onClick={() => removeItem(item.id)}>X</button>
                                </div>
                            </div>
                        </div>
                    )) : <h2 className='text-2xl text-center'>No Item Found.</h2>}
                </div>

                <div className="md:col-span-4 col-span-12">
                    <div className="bg-white text-[#000] p-4 rounded-lg shadow-md">
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>{subtotal > 0 ? `$${subtotal.toFixed(2)}` : "NA"}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>$4.99</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>{total}</span>
                        </div>
                        <span className="text-muted-foreground">including VAT</span>

                        <button onClick={paynow} className={`mt-4 w-full bg-blue text-primary-foreground p-2 rounded-full px-12 py-4 r bg-[#2d73ecbb] font-bold text-white tracking-widest shadow-md uppercase transform hover:scale-105 hover:bg-[#fff] hover:text-[#000] transition-colors duration-400 lg:text-xl text-[14px] ${items.length === 0 ? 'cursor-not-allowed' : ''}`} disabled={items.length === 0}>{loading?"Processing...":'Check out'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
