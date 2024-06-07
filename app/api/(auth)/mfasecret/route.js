import speakeasy from 'speakeasy';
import qrcode from 'qrcode';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const mfaSecret = speakeasy.generateSecret({ name: 'Gamesphere' });
    const qrCodeUrl = await qrcode.toDataURL(mfaSecret.otpauth_url);

    return NextResponse.json({ secret: mfaSecret.base32, qrCodeUrl }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}