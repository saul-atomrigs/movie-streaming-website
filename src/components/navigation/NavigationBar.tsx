import { useRouter } from 'next/router';
import Logo from '../Logo';
import Responsive from '../Responsive';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import SubMenu from './SubMenu';
import NavigationBarContainer from './NavigationBarContainer';

export default function NavigationBar() {
  const router = useRouter();

  const handleClickLogo = () => {
    router.push('/');
  };

  return (
    <NavigationBarContainer>
      <Logo onClick={handleClickLogo} />
      <Responsive mobile={<MobileMenu />} desktop={<DesktopMenu />} />
      <SubMenu />
    </NavigationBarContainer>
  );
}
