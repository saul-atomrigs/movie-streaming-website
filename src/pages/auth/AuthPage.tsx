import CTA from './components/CTA';
import Footer from './components/Footer';
import InputGroup from './components/InputGroup';
import Header from './components/Header';
import AuthBoxContainer from './components/AuthBoxContainer';
import AuthPageLayout from './components/AuthPageLayout';
import SocialLogin from '@/components/SocialLogin';
import { useAuthPath } from './hooks/useAuthPage';
import { FcGoogle } from 'react-icons/fc';
import Logo from '@/components/Logo';
import { useRouter } from 'next/router';

export default function AuthPage() {
  const router = useRouter();
  const { userInfo, setUserInfo, variant, setVariant, IS_LOGIN, register, login, googleLogin } =
    useAuthPath();

  const handleClickLogo = () => {
    router.push('/');
  };

  return (
    <AuthPageLayout>
      <Logo onClick={handleClickLogo} />
      <AuthBoxContainer>
        <Header IS_LOGIN={IS_LOGIN} />
        <InputGroup variant={variant} userInfo={userInfo} setUserInfo={setUserInfo} />
        <CTA onClick={IS_LOGIN ? login : register} IS_LOGIN={IS_LOGIN} />
        <SocialLogin onClick={googleLogin}>
          <FcGoogle size={30} />
        </SocialLogin>
        <Footer IS_LOGIN={IS_LOGIN} setVariant={setVariant} />
      </AuthBoxContainer>
    </AuthPageLayout>
  );
}
