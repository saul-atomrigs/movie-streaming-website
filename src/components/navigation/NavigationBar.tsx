import { useRouter } from 'next/router';
import Logo from '../Logo';
import Responsive from '../Responsive';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import SubMenu from './SubMenu';

export default function NavigationBar() {
  const router = useRouter();

  const handleClickLogo = () => {
    router.push('/');
  };

  return (
    <div className="w-full fixed z-40">
      <div className="px-4 h-16 md:h-20 flex flex-row items-center transition duration-500 bg-zinc-800 bg-opacity-90">
        <Logo onClick={handleClickLogo} />

        <Responsive mobile={<MobileMenu />} desktop={<DesktopMenu />} />

        <SubMenu />
      </div>
    </div>
  );
}
