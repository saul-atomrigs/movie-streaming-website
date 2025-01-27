interface HeaderProps {
  IS_LOGIN: boolean;
}

export default function Header({ IS_LOGIN }: HeaderProps) {
  return <h1 className="text-white text-4xl font-semibold mb-8">{IS_LOGIN ? '로그인' : '가입하기'}</h1>;
}
