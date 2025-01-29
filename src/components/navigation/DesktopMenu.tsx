import NavigationItem from './NavigationItem';

export default function DesktopMenu() {
  return (
    <div className="flex-row ml-8 gap-7 hidden lg:flex">
      <NavigationItem label="홈" />
      <NavigationItem label="영화" />
      <NavigationItem label="시리즈" />
      <NavigationItem label="요즘 대세 컨텐츠" />
      <NavigationItem label="내가 찜한 리스트" />
      <NavigationItem label="언어별로 찾아보기" />
    </div>
  );
}
