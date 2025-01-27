import Input from '@/src/components/Input';

interface InputGroupProps {
  variant: string;
  userInfo: {
    username: string;
    email: string;
    password: string;
  };
  setUserInfo: (userInfo: any) => void;
}

export default function InputGroup({ variant, userInfo, setUserInfo }: InputGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      {variant === 'signup' && (
        <Input
          label="이름"
          id="username"
          value={userInfo.username}
          onChange={e => setUserInfo({ ...userInfo, username: e.target.value })}
        />
      )}
      <Input
        label="이메일 주소"
        id="email"
        value={userInfo.email}
        onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
      />
      <Input
        label="비밀번호"
        id="password"
        value={userInfo.password}
        onChange={e => setUserInfo({ ...userInfo, password: e.target.value })}
      />
    </div>
  );
}
