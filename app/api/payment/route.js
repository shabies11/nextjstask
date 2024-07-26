import { NextResponse } from "next/server";
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIP_KEY);

 
export async function POST(request){
    try {
        const data = await request.json();
        const customer = await stripe.customers.create({
            email: 'customer@example.com',
            address:{
                city:'jh',
                country:'US',
                line1:"address1",
                line2:"address2",
                postal_code:"12345",
                state:'CA',
            },
            name: 'John Doe',
            phone:'1234567890',
          });
          const checkSession = await stripe.checkout.sessions.create({
            mode: 'payment', 
            success_url: `http://localhost:3000/`, 
            cancel_url: `http://localhost:3000/`,
            payment_method_types: ['card'],
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: data.name,
                  },
                  unit_amount: data.totalprice *100,
                },
                quantity: 1,
              },
            ],
          })


        return NextResponse.json({
            data: data,
            status: 201,
            success: true,
            message: {checkSession,url:checkSession.url}
        });
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
            success: false
        })
    }
}