interface CTAProps {
  IS_LOGIN: boolean;
  onClick: () => void;
}

export default function CTA({ IS_LOGIN, onClick }: CTAProps) {
  return (
    <button onClick={onClick} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700">
      {IS_LOGIN ? '로그인' : '가입하기'}
    </button>
  );
}
