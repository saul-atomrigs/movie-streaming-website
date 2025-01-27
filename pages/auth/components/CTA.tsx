interface CTAProps {
  IS_LOGIN: boolean;
}

export default function CTA({ IS_LOGIN }: CTAProps) {
  return (
    <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700">
      {IS_LOGIN ? '로그인' : '가입하기'}
    </button>
  );
}
