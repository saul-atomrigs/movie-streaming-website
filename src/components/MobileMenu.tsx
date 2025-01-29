interface MobileMenuProps {
  visible: boolean;
}

export default function MobileMenu({ visible }: MobileMenuProps) {
  if (!visible) return null;

  return (
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
  );
}
