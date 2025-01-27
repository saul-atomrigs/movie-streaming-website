import type { VariantType } from '../types';

interface FooterProps {
  IS_LOGIN: boolean;
  setVariant: React.Dispatch<React.SetStateAction<VariantType>>;
}

export default function Footer({ IS_LOGIN, setVariant }: FooterProps) {
  const toggleVariant = () => {
    setVariant((prev: 'login' | 'signup') => (prev === 'login' ? 'signup' : 'login'));
  };

  return (
    <p className="text-xs text-neutral-500 mt-12">
      {IS_LOGIN ? '넷플릭스를 처음 이용하시나요?' : '이미 회원이신가요?'}
      <span onClick={toggleVariant} className="text-xs text-white ml-1 hover:underline cursor-pointer">
        {IS_LOGIN ? '지금 가입하세요.' : '로그인하기.'}
      </span>
    </p>
  );
}
