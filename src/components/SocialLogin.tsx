interface SocialLoginProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function SocialLogin({ onClick, children }: SocialLoginProps) {
  return (
    <div className="flex flex-row items-center gap-4 mt-8 justify-center">
      <div
        onClick={onClick}
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
      >
        {children}
      </div>
    </div>
  );
}
