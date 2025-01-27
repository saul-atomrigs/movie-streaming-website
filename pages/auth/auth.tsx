import Input from '@/src/components/Input';
import { useState } from 'react';

export default function AuthPage() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [variant, setVariant] = useState('login');
  const IS_LOGIN = variant === 'login';

  const toggleVariant = () => {
    setVariant(prev => (prev === 'login' ? 'signup' : 'login'));
  };

  return (
    <div className="relative h-full w-full bg-[url(/images/bg.jpg)] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <h1 className="text-red-600 text-3xl">넷플릭스</h1>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h1 className="text-white text-4xl font-semibold mb-8">{IS_LOGIN ? '로그인' : '가입하기'}</h1>
            <div className="flex flex-col gap-4">
              {variant === 'signup' && (
                <Input
                  label="이름"
                  id="username"
                  value={userInfo.username}
                  onChange={e => setUserInfo({ ...userInfo, username: e.target.value })}
                />
              )}
              <Input
                label="이메일 주소"
                id="email"
                value={userInfo.email}
                onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
              />
              <Input
                label="비밀번호"
                id="password"
                value={userInfo.password}
                onChange={e => setUserInfo({ ...userInfo, password: e.target.value })}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700">
              {IS_LOGIN ? '로그인' : '가입하기'}
            </button>
            <p className="text-xs text-neutral-500 mt-12">
              {IS_LOGIN ? '넷플릭스를 처음 이용하시나요?' : '이미 회원이신가요?'}
              <span onClick={toggleVariant} className="text-xs text-white ml-1 hover:underline cursor-pointer">
                {IS_LOGIN ? '지금 가입하세요.' : '로그인하기.'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
