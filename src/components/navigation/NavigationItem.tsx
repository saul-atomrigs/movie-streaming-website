interface NavigationItemProps {
  label: string;
}
export default function NavigationItem({ label }: NavigationItemProps) {
  return <div className="text-white cursor-pointer hover:text-neutral-500 transition">{label}</div>;
}
