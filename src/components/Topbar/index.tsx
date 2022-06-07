import styled from 'styled-components';

import BackIcon from '#/asset/back-icon.svg';
import Default from '#/asset/default-profile.png';

import useTopBar from './hooks';

function TopBar() {
  const { userImage } = useTopBar();

  return (
    <TopBarLayout>
      <BackArea
        onClick={(e) => {
          e.preventDefault();
          window.history.back();
        }}
      >
        <img src={BackIcon} alt="back" />
      </BackArea>
      <ProfileCircle>
        {userImage ? (
          <img src={userImage} alt="profile" className="profile" />
        ) : (
          <img src={Default} alt="profile" className="profile" />
        )}
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
  z-index: 10;
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
