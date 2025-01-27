import { useState } from 'react';
import type { VariantType } from '../types';

export function useAuthPath() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [variant, setVariant] = useState<VariantType>('login');
  const IS_LOGIN = variant === 'login';

  return {
    userInfo,
    setUserInfo,
    variant,
    setVariant,
    IS_LOGIN,
  };
}
