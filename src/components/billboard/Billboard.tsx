import useBillboard from './hooks/useBillboard';
import Video from './Video';

export default function Billboard() {
  const { data } = useBillboard();

  return (
    <div className="relative h-[56.25vw]">
      <Video.Player videoUrl={data?.videoUrl} />
      <Video.Wrapper>
        <Video.Description title={data?.title} description={data?.description} />
      </Video.Wrapper>
    </div>
  );
}
