import { useRouter } from 'next/router';
import Logo from './Logo';
import NavigationItem from './NavigationItem';
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import Image from 'next/image';

export default function NavigationBar() {
  const router = useRouter();
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const handleClickLogo = () => {
    router.push('/');
  };

  const handleToggleMenu = () => {
    setIsMobileMenuVisible(prev => !prev);
  };

  return (
    <div className="w-full fixed z-40">
      <div className="px-4 h-16 md:h-20 flex flex-row items-center transition duration-500 bg-zinc-800 bg-opacity-90">
        <Logo onClick={handleClickLogo} />

        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavigationItem label="홈" />
          <NavigationItem label="영화" />
          <NavigationItem label="시리즈" />
          <NavigationItem label="요즘 대세 컨텐츠" />
          <NavigationItem label="내가 찜한 리스트" />
          <NavigationItem label="언어별로 찾아보기" />
        </div>

        <div
          onClick={handleToggleMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-sm text-white">찾아보기</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu visible={isMobileMenuVisible} />
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch size={20} />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell size={20} />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <Image
                src="/images/profile.png"
                layout="responsive"
                width={100}
                height={100}
                alt="profile"
              />
            </div>
            <BsChevronDown className="text-white transition" />
          </div>
        </div>
      </div>
    </div>
  );
}
