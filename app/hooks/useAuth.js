"use client";

import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const router = useRouter();

  const isTokenExpired = (token) => {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token || isTokenExpired(token)) {
        router.push('/pages/login');
        return;
      }
    };

    checkAuth();
  }, [router]);
};

export default useAuth;