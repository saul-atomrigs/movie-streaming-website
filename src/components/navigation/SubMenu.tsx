import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';
import Image from 'next/image';
import AccountMenu from './AccountMenu';
import { useState } from 'react';

export default function SubMenu() {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const toggleAccountMenu = () => {
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  return (
    <div className="flex flex-row ml-auto gap-7 items-center">
      <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
        <BsSearch size={20} />
      </div>
      <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
        <BsBell size={20} />
      </div>
      <div
        onClick={toggleAccountMenu}
        className="flex flex-row items-center gap-2 cursor-pointer relative"
      >
        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
          <Image src="/images/profile.png" width={100} height={100} alt="profile" />
        </div>
        <BsChevronDown
          className={`text-white transition ${isSubmenuVisible ? 'rotate-180' : 'rotate-0'}`}
        />
        <AccountMenu visible={isSubmenuVisible} />
      </div>
    </div>
  );
}
