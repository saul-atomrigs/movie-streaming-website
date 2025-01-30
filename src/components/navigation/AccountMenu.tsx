import Image from 'next/image';

interface AccountMenuProps {
  visible: boolean;
}

export default function AccountMenu({ visible }: AccountMenuProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black absolute w-56 top-14 right-0 py-5 flex-col">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            width={20}
            height={20}
            src="/images/profile.png"
            alt="profile"
            className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden"
          />
          <p className="text-white text-sm group-hover/item:underline">username</p>
        </div>
        <hr />
        <div className="px-3 text-center text-white">로그아웃</div>
      </div>
    </div>
  );
}
