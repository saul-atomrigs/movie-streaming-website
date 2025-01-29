import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface MobileMenuProps {
  visible: boolean;
  onClick: () => void;
}

export default function MobileMenu() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuVisible(prev => !prev);
  };

  return (
    <div
      onClick={handleToggleMenu}
      className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
    >
      <p className="text-sm text-white">찾아보기</p>
      <BsChevronDown className="text-white transition" />

      {isMobileMenuVisible && (
        <div className="bg-black w-56 absolute top-8 left-5 py-5 flex-col border-2 border-gray-400">
          <div className="flex flex-col gap-4">
            <div className="px-3 text-center text-white hover:underline">홈</div>
            <div className="px-3 text-center text-white hover:underline">영화</div>
            <div className="px-3 text-center text-white hover:underline">시리즈</div>
            <div className="px-3 text-center text-white hover:underline">요즘 대세 컨텐츠</div>
            <div className="px-3 text-center text-white hover:underline">내가 찜한 리스트</div>
            <div className="px-3 text-center text-white hover:underline">언어별로 찾아보기</div>
          </div>
        </div>
      )}
    </div>
  );
}
