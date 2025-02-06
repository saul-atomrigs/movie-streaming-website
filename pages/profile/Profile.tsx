import ProfileName from './components/ProfileName';
import ProfileImage from './components/ProfileImage';
import ProfileContainer from './components/ProfileContainer';
import Header from './components/Header';
import CenterLayout from '@/src/components/CenterLayout';

export default function Profile() {
  return (
    <CenterLayout>
      <Header />
      <ProfileContainer>
        <ProfileImage />
        <ProfileName />
      </ProfileContainer>
    </CenterLayout>
  );
}
