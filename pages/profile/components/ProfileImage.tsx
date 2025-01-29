import React from 'react';
import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div
      className="
        w-44
        h-44
        rounded-md
        flex
        items-center
        justify-center
        border-2
        border-transparent
        group-hover:cursor-pointer
        group-hover:border-white
        overflow-hidden
      "
    >
      <Image
        src="/images/profile.png"
        alt="profile"
        width={176}
        height={176}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
