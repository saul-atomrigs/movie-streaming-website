interface NavigationBarProps {
  children: React.ReactNode;
}

export default function NavigationBar({ children }: NavigationBarProps) {
  return <nav className="px-12 py-5">{children}</nav>;
}
