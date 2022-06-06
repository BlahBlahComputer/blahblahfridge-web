/* eslint-disable camelcase */
import { useMemo } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import Star from '#/components/star';
import defaultProfile from '#/asset/default-profile.png';

interface Props {
  username: string;
  userimage: string | null;
  content: string;
  rate: number;
  created_at: string;
}

function ReviewItem({ username, userimage, content, rate, created_at }: Props) {
  const createString = useMemo(() => dayjs(created_at).format('YYYY.MM.DD'), [created_at]);

  return (
    <ItemLayout>
      <ItemDescription>
        <NameContainer>
          <ProfileCircle>
            {userimage && userimage !== '' ? (
              <img src={userimage} alt="profile" className="profile" />
            ) : (
              <img src={defaultProfile} alt="profile" className="profile" />
            )}
          </ProfileCircle>
          <ItemName>
            {username}
            {' >'}
          </ItemName>
        </NameContainer>
        <ItemNameArea>
          <ItemDate>{createString}</ItemDate>
          <Star rate={rate} isEditable={false} starSize="20px" />
        </ItemNameArea>
      </ItemDescription>
      {userimage && userimage !== '' && <ItemImage src={userimage} />}
      <ItemReviewText>{content}</ItemReviewText>
    </ItemLayout>
  );
}

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: center;
`;

const ProfileCircle = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 70%;
  overflow: hidden;

  .profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemLayout = styled.div`
  display: flex;
  flex-direction: column;

  border: 5px solid #136ac0;
  border-radius: 10px;

  padding: 8px;

  width: 100%;
  max-height: 500px;
`;

const ItemImage = styled.img`
  height: 50%;

  width: auto;
`;

const ItemDescription = styled.div`
  display: flex;

  flex-direction: row;

  padding: 10px 0;
  margin-left: 10px;

  width: 100%;

  justify-content: space-between;
`;

const ItemNameArea = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 10px;

  align-items: center;
  justify-content: space-between;
`;

const ItemName = styled.span`
  font-size: 1rem;
`;

const ItemDate = styled.span`
  font-size: 1rem;
`;

const ItemReviewText = styled.span`
  margin-top: 10px;
  font-size: 1rem;
`;

export default ReviewItem;
