import { NextResponse } from "next/server";
import { user } from "@/models/users";
import { connectDB } from "@/helper/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userSchema from "@/lib/zod";
connectDB();
export async function POST(request, res) {
  try {
    const payload = await request.json();

    const { email, password } = payload;
    console.log(payload);
    //check user
    const validUser = await user.findOne({ email: email });
    if (!validUser) {
      return NextResponse.json({
        message: "User not found",
        status: 404,
        success: false,
      });
    }

    // password check
    const isMatch = await bcrypt.compare(password, validUser.password);
    if (!isMatch) {
      return NextResponse.json({
        message: "Invalid credentials",
        status: 401,
        success: false,
      });
    }

    // create user token

    var token = jwt.sign({ _id: validUser._id }, process.env.HASH_TOKEN, {
      expiresIn: "1D",
    });
    const response = NextResponse.json({
      message: "User logged in successfully",
      status: 200,
      success: true,
    });
    response.cookies.set("loginToken", token);
    return response;
  } catch (err) {
    return NextResponse.json({
      message: err.message,
      status: 400,
      success: false,
    });
  }
}
