import styled from 'styled-components';

import { IReviewResult } from '#/@types/review';

type Props = Omit<IReviewResult, 'foodId'>;

function ReviewItem({ foodImageUrl, foodName, date, star, reviewText }: Props) {
  return (
    <ItemLayout>
      <ItemDescription>
        <ItemName>{foodName}</ItemName>
        <ItemNameArea>
          <ItemDate>{date}</ItemDate>
          <ItemStar>{star}</ItemStar>
        </ItemNameArea>
      </ItemDescription>
      <ItemImage src={foodImageUrl ?? ''} />
      <ItemReviewText>{reviewText}</ItemReviewText>
    </ItemLayout>
  );
}

const ItemLayout = styled.div`
  display: flex;
  flex-direction: column;

  border: 5px solid #136ac0;
  border-radius: 10px;

  padding: 8px;

  width: 100%;
  height: 600px;
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
  font-size: 2rem;
`;

const ItemDate = styled.span`
  font-size: 1.5rem;
`;

const ItemStar = styled.span`
  font-size: 1.5rem;
`;

const ItemReviewText = styled.span`
  margin-top: 10px;
  font-size: 1.3rem;
`;

export default ReviewItem;
