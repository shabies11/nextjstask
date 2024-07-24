

import jwt from 'jsonwebtoken';
import {user} from "@/models/users";
import { NextResponse } from 'next/server';

export async function GET(request){
    let token = request.cookies.get('loginToken')?.value;
    const verified_token = jwt.verify(token,process.env.HASH_TOKEN);
    const verify_user = await user.findById({_id:verified_token._id}).select('-password');
    return NextResponse.json(verify_user);
}