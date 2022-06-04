import styled from 'styled-components';

import { ISearchResult } from '#/@types/search';

type Props = Omit<ISearchResult, 'foodId'>;

function ItemInfo({ foodImageUrl, foodName, spendTime, category }: Props) {
  return (
    <ItemLayout>
      <ItemImage src={foodImageUrl ?? ''} />
      <ItemDescription>
        <ItemNameArea>
          <ItemCategory>{category}</ItemCategory>
          <ItemSpendTime>{spendTime}m</ItemSpendTime>
        </ItemNameArea>
        <ItemName>{foodName}</ItemName>
      </ItemDescription>
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
  height: 300px;
`;

const ItemImage = styled.img`
  height: 70%;

  width: auto;
`;

const ItemDescription = styled.div`
  display: flex;

  flex-direction: column;

  padding: 10px 0;
  margin-left: 10px;

  width: 100%;

  justify-content: space-between;
`;

const ItemNameArea = styled.div`
  display: flex;
  flex-direction: row;

  margin-right: 10px;

  align-items: center;
  justify-content: space-between;
`;

const ItemName = styled.span`
  margin-top: 10px;
  font-size: 1.8rem;
`;

const ItemSpendTime = styled.span`
  font-size: 1.4rem;
`;

const ItemCategory = styled.span`
  font-size: 1.4rem;
`;

export default ItemInfo;
