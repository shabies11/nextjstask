import { NextResponse } from "next/server";
import {user} from "@/models/users";
import {connectDB} from "@/helper/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
connectDB();
export async function POST(request, res) {
    
    try {
      const payload = await request.json();

      let dbuser = await user.find();
    
      console.log(payload);
      let filter = dbuser.filter((current) => current.email == payload.email);
      console.log(filter);
  
      if (filter.length == 0) {
        
        console.log(payload.password)
        payload.password = await bcrypt.hash(
          payload.password,
          parseInt(process.env.BCRYPT_SALT)
        );

  
      let userInfo =  await user.create(payload);
        if(userInfo){
          var token = jwt.sign({_id:userInfo._id},process.env.HASH_TOKEN,{
            expiresIn: '1D'
          });
          
        }

        let response =  NextResponse.json(
          {
            status: true,
            info: userInfo,
            message: "User created successfully",
            
          },
          { status: 200 }
        );  
        response.cookies.set('loginToken',token);
        return response;
      } else {
        return NextResponse.json(
          {
            status: false,
            message: "try different email",
          },
          { status: 500 }
        );
      }
    
    } catch (error) {
      return NextResponse.json(
        {
          status: false,
          message: "operation failed",
          error,
        },
        { status: 500 }
      );
    }
  }