import { isEmpty } from 'lodash';
import { PropsWithChildren } from 'react';
import type { MovieCardType, MovieListType } from './types';
import { BsFillPlayFill } from 'react-icons/bs';

function List({ data, title, children }: MovieListType & PropsWithChildren) {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div className="">
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">{title}</p>
        <div className="grid grid-cols-4 gap-2">{children}</div>
      </div>
    </div>
  );
}

function Card({ data, children }: MovieCardType) {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        src={data.thumbnailUrl}
        alt="thumbnail"
        className="
          cursor-pointer object-cover object-top transition duration shadow-xl rounded-md
          group-hover:opacity-90 delay-300 w-full h-full
        "
      />
      {children}
    </div>
  );
}

function SubCard({ data }: MovieCardType) {
  return (
    <div
      className="
      opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300
      w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[2vw] group-hover:opacity-100
    "
    >
      <img
        className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
        <div className="flex flex-row items-center gap-3">
          <div
            onClick={() => console.log(data)}
            className="
            cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full
            flex justify-center items-center transition hover:bg-neutral-300
          "
          >
            <BsFillPlayFill size={30} />
          </div>
        </div>

        <p className="text-green-400 font-semibold mt-4">
          New <span className="text-white">2025</span>
        </p>

        <div className="flex flex-row mt-4 gap-2 items-center">
          <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
        </div>
        <div className="flex flex-row mt-4 gap-2 items-center">
          <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
        </div>
      </div>
    </div>
  );
}

const Movie = {
  List,
  Card,
  SubCard,
};

export default Movie;
