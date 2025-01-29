import { useIsMobile } from '../hooks/useIsMobile';

interface ResponsiveProps {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
}

export default function Responsive({ mobile, desktop }: ResponsiveProps) {
  const isMobile = useIsMobile();
  return isMobile ? mobile : desktop;
}
