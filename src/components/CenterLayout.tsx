interface CenterLayoutProps {
  children: React.ReactNode;
}

export default function CenterLayout({ children }: CenterLayoutProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
