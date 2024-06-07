import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const authMiddleware = (handler) => {
  return async (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return NextResponse.json({ message: 'No authorization header' }, { status: 401 });
    }

    const token = authorization.split(' ')[1];
    if (!token) {
      return NextResponse.json({ message: 'No token provided' }, { status: 401 });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Attach decoded token to request object
      return handler(req, res);
    } catch (error) {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
    }
  };
};

export default authMiddleware;