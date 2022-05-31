import styled from 'styled-components';

import { ISearchResult } from '#/@types/search';

type Props = Omit<ISearchResult, 'foodId'>;

function SearchItem({ foodImageUrl, foodName, spendTime, category }: Props) {
  return (
    <ItemLayout>
      <ItemImage src={foodImageUrl ?? ''} />
      <ItemDescription>
        <ItemNameArea>
          <ItemName>{foodName}</ItemName>
          <ItemSpendTime>{spendTime}m</ItemSpendTime>
        </ItemNameArea>
        <ItemCategory>{category}</ItemCategory>
      </ItemDescription>
    </ItemLayout>
  );
}

const ItemLayout = styled.div`
  display: flex;
  flex-direction: row;

  border: 5px solid royalblue;
  border-radius: 10px;

  padding: 8px;

  width: 100%;
  height: 200px;
`;

const ItemImage = styled.img`
  height: 100%;

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

  align-items: center;
  justify-content: space-between;
`;

const ItemName = styled.span`
  font-size: 1.6rem;
`;

const ItemSpendTime = styled.span`
  font-size: 1.3rem;
`;

const ItemCategory = styled.span`
  font-size: 1.3rem;
`;

export default SearchItem;
