import type { PropsWithChildren } from 'react';

type NavigationBarContainerProps = PropsWithChildren<{}>;

export default function NavigationBarContainer({ children }: NavigationBarContainerProps) {
  return (
    <div className="w-full fixed z-40">
      <div className="px-4 h-16 md:h-20 flex flex-row items-center transition duration-500 bg-zinc-800 bg-opacity-90">
        {children}
      </div>
    </div>
  );
}
