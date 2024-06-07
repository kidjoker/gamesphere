import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongoose';
import User from '@/models/User';
import { NextResponse } from 'next/server'
import speakeasy from 'speakeasy';

export async function POST(req) {
  const body = await req.json();
  const { username, email, password, mfaCode, mfaSecret} = body;

  await dbConnect();

  try {
    const verified = speakeasy.totp.verify({
      secret: mfaSecret,
      encoding: 'base32',
      token: mfaCode,
    });

    if (!verified) {
      return NextResponse.json({ message: 'Invalid MFA code' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword, mfaSecret: mfaSecret });
    await user.save();
    return NextResponse.json({ message: 'User created successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}