import { NextResponse } from "next/server";

export function GET(){

    try {
        let response = NextResponse.json({
            message: 'User logout successfully',
            status:200,
            success: true
        });
        response.cookies.delete('loginToken'); 
        return response;
    } catch (error) {
        return NextResponse.json({
            message:error.message,
            status:500,
            success: false
        })
    }
}