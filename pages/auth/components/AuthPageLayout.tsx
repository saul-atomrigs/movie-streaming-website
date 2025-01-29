interface AuthPageLayoutProps {
  children: React.ReactNode;
}

export default function AuthPageLayout({ children }: AuthPageLayoutProps) {
  return (
    <div className="relative h-full w-full bg-[url(/images/bg.jpg)] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50 p-2">{children}</div>
    </div>
  );
}
