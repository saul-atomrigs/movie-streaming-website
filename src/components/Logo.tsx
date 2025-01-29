interface LogoProps {
  onClick: () => void;
}
export default function Logo({ onClick }: LogoProps) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <h1 className="text-red-600 text-3xl">넷플릭스</h1>
    </div>
  );
}
