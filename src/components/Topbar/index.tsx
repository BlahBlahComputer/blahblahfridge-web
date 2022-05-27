import styled from 'styled-components';

import BackIcon from '#/asset/back-icon.svg';

interface Props {
  imageUrl: string | null;
}

function TopBar({ imageUrl }: Props) {
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
        <img src={imageUrl ?? ''} alt="profile" className="profile" />
      </ProfileCircle>
    </TopBarLayout>
  );
}

const TopBarLayout = styled.div`
  display: flex;
  flex-direction: row;

  position: sticky;
  align-items: center;

  justify-content: space-between;
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
