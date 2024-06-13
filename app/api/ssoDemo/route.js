import dbConnect from '@/lib/mongoose';
import User from '@/models/User';
import authMiddleware from '@/lib/auth';
import { NextResponse } from 'next/server';

const handler = async (req, res) => {

  await dbConnect();

  const user = await User.findById(req.user.id);
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  res.status(200).json({ message: 'Protected data', user });
  return NextResponse.json({ message: 'Protected data', user }, { status: 200 });
};

export default authMiddleware(handler);