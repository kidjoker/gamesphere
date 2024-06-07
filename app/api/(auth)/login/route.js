import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";
import speakeasy from 'speakeasy';

export async function POST(req) {
  const body = await req.json();
  const { email, password, mfaCode } = body;

  await dbConnect();

  try {
    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 });
    
    // Verify the provided MFA code
    const verified = speakeasy.totp.verify({
      secret: user.mfaSecret,
      encoding: 'base32',
      token: mfaCode,
    });

    if (!verified) {
      return NextResponse.json({ message: 'Invalid MFA code' }, { status: 400 });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRESIN,
    });
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
