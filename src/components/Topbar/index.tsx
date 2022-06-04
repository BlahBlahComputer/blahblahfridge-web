import styled from 'styled-components';

import BackIcon from '#/asset/back-icon.svg';

import useTopBar from './hooks';

function TopBar() {
  const { userImage } = useTopBar();

  return (
    <TopBarLayout>
      <BackArea
        onClick={() => {
          window.history.back();
        }}
      >
        <img src={BackIcon} alt="back" />
      </BackArea>
      <ProfileCircle>
        <img src={userImage ?? 'https://default.blahblahfridge.site/default.png'} alt="profile" className="profile" />
      </ProfileCircle>
    </TopBarLayout>
  );
}

const TopBarLayout = styled.div`
  display: flex;
  flex-direction: row;

  position: sticky;
  top: 0px;
  margin-top: 30px;
  align-items: center;

  justify-content: space-between;

  background: white;
  z-index: 9999;
`;

const BackArea = styled.div`
  width: 50px;
`;

const ProfileCircle = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 70%;
  overflow: hidden;

  .profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default TopBar;
