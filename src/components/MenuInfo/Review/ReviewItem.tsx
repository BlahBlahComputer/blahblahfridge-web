/* eslint-disable camelcase */
import { useMemo } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import Star from '#/components/star';

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
        <ItemName>
          {username}
          {' >'}
        </ItemName>
        <ItemNameArea>
          <ItemDate>{createString}</ItemDate>
          <Star rate={rate} isEditable={false} starSize="20px" />
        </ItemNameArea>
      </ItemDescription>
      {userimage && <ItemImage src={userimage} />}
      <ItemReviewText>{content}</ItemReviewText>
    </ItemLayout>
  );
}

const ItemLayout = styled.div`
  display: flex;
  flex-direction: column;

  border: 5px solid royalblue;
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
