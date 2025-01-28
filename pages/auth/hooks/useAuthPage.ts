import { useState } from 'react';
import axios from 'axios';
import type { VariantType } from '../types';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export function useAuthPath() {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [variant, setVariant] = useState<VariantType>('login');
  const IS_LOGIN = variant === 'login';

  const register = async () => {
    try {
      await axios.post('/api/register', {
        email: userInfo.email,
        name: userInfo.username,
        password: userInfo.password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const login = async () => {
    try {
      await signIn('credentials', {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
        callbackUrl: '/',
      });

      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return {
    userInfo,
    setUserInfo,
    variant,
    setVariant,
    IS_LOGIN,
    register,
    login,
  };
}
