import CTA from './components/CTA';
import Footer from './components/Footer';
import InputGroup from './components/InputGroup';
import Header from './components/Header';
import AuthBoxContainer from './components/AuthBoxContainer';
import NavigationBar from '@/src/components/NavigationBar';
import Logo from '@/src/components/Logo';
import AuthPageLayout from './components/AuthPageLayout';
import { useAuthPath } from './hooks/useAuthPage';

export default function AuthPage() {
  const { userInfo, setUserInfo, variant, setVariant, IS_LOGIN } = useAuthPath();

  return (
    <AuthPageLayout>
      <NavigationBar>
        <Logo />
      </NavigationBar>
      <AuthBoxContainer>
        <Header IS_LOGIN={IS_LOGIN} />
        <InputGroup variant={variant} userInfo={userInfo} setUserInfo={setUserInfo} />
        <CTA IS_LOGIN={IS_LOGIN} />
        <Footer IS_LOGIN={IS_LOGIN} setVariant={setVariant} />
      </AuthBoxContainer>
    </AuthPageLayout>
  );
}
