import { useRouter } from 'next/router';
import Logo from '../Logo';
import NavigationItem from './NavigationItem';
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import Image from 'next/image';
import DesktopMenu from './DesktopMenu';
import Responsive from '../Responsive';

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
