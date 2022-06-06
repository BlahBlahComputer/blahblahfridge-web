import styled from 'styled-components';

import { ISearchResult } from '#/@types/search';
import Timer from '#/asset/timer.png';

type Props = Omit<ISearchResult, 'foodId'>;

function SearchItem({ foodImageUrl, foodName, spendTime, category }: Props) {
  return (
    <ItemLayout>
      {foodImageUrl && <ItemImage src={foodImageUrl} />}
      <ItemDescription>
        <ItemNameArea>
          <ItemName>{foodName}</ItemName>
          <ItemTimeArea>
            <ImageContainer url={Timer} />
            <ItemSpendTime>{spendTime}분</ItemSpendTime>
          </ItemTimeArea>
          <ItemCategory>#{category}</ItemCategory>
        </ItemNameArea>
      </ItemDescription>
    </ItemLayout>
  );
}

const ImageContainer = styled.div<{
  url: string;
}>`
  display: flex;

  background: url(${(props) => props.url});
  background-size: cover;

  width: 12%;
  height: 18px;
`;

const ItemLayout = styled.div`
  display: flex;
  flex-direction: row;

  border: 5px solid #136ac0;
  border-radius: 10px;

  padding: 8px;

  width: 100%;
  height: 150px;
`;

const ItemImage = styled.img`
  height: 100%;
  max-width: 100px;
`;

const ItemDescription = styled.div`
  display: flex;

  flex-direction: column;

  padding: 10px 0;
  margin-left: 10px;

  width: 100%;
`;

const ItemTimeArea = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 20px;
`;

const ItemNameArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  font-size: 1.4rem;
`;

const ItemSpendTime = styled.span`
  font-size: 1.2rem;
  margin-left: 5px;
`;

const ItemCategory = styled.span`
  font-size: 1.2rem;
  margin-top: 20px;
`;

export default SearchItem;
