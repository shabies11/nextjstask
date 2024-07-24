import { NextResponse } from "next/server";


export async function GET(){
    try{

        let product = await fetch('https://fakestoreapi.com/products');
        let products = await product.json();
        return NextResponse.json({
            data: products,
            status: 200,
            success: true

        })
    }catch (err) {
        return NextResponse.json({
            error: err.message,
            status: 500,
            success: false
        })
    }
}