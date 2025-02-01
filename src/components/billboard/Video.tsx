import type { PropsWithChildren } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
}

interface VideoDescriptionProps {
  title: string;
  description: string;
}

const YOUTUBE_URL = {
  BASE: 'youtube.com',
  SHORT: 'youtu.be',
  EMBED: 'https://www.youtube.com/embed/',
  AUTOPLAY: 'autoplay=1',
  MUTE: 'mute=1',
};

function Player({ videoUrl }: VideoPlayerProps) {
  return (
    <>
      {videoUrl?.includes(YOUTUBE_URL.BASE) || videoUrl?.includes(YOUTUBE_URL.SHORT) ? (
        <iframe
          className="w-full h-[56.25vw] brightness-60"
          src={`${YOUTUBE_URL.EMBED}${new URL(videoUrl).searchParams.get('v')}?${
            YOUTUBE_URL.AUTOPLAY
          }&${YOUTUBE_URL.MUTE}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <video
          className="w-full h-[56.25vw] object-cover brightness-60"
          autoPlay
          loop
          muted
          src={videoUrl}
        ></video>
      )}
    </>
  );
}

function Description({ title, description }: VideoDescriptionProps) {
  return (
    <>
      <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
        {title}
      </p>
      <p className="text-white text-xs md:text-lg w-[50%] lg:text-xl drop-shadow-xl">
        {description}
      </p>
      <div className="">
        <button className="bg-white text-black font-bold py-2 px-4 rounded-full mt-4">
          더보기
        </button>
      </div>
    </>
  );
}

function Wrapper({ children }: PropsWithChildren<{}>) {
  return <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">{children}</div>;
}

const Video = {
  Player,
  Description,
  Wrapper,
};

export default Video;
