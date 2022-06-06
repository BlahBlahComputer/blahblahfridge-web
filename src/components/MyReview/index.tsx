import styled from 'styled-components';

import useReview from './hooks';
import ReviewItem from './ReviewItem';

function MyReview() {
  const { keyword, setKeyword, reviewResult } = useReview();

  return (
    <ContainerLayout>
      <ButtonLayout>
        <ButtonLayout1
          onClick={() => {
            window.location.replace('/myreview');
          }}
        >
          리뷰 모아보기
        </ButtonLayout1>
        <ButtonLayout2
          onClick={() => {
            window.location.replace('/changeprofile');
          }}
        >
          프로필 수정하기
        </ButtonLayout2>
      </ButtonLayout>
      <ResultArea>
        {reviewResult.map((result) => {
          return (
            <ReviewItem
              key={result.foodId}
              foodImageUrl={result.foodImageUrl}
              foodName={result.foodName}
              date={result.date}
              star={result.star}
              reviewText={result.reviewText}
            />
          );
        })}
      </ResultArea>
    </ContainerLayout>
  );
}

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

const ButtonLayout1 = styled.div`
  display: flex;

  align-items: center;
  justify-self: center;
  display: flex;
  justify-content: center;

  width: 49%;
  height: 38px;
  background-color: white;

  border-radius: 10px;
  margin: auto;
`;

const ButtonLayout2 = styled.div`
  display: flex;

  align-items: center;
  justify-self: center;
  display: flex;
  justify-content: center;

  width: 49%;
  height: 38px;
  background-color: #136ac0;

  border-radius: 10px;
  margin: auto;
`;

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;

  align-items: center;
  justify-items: center;

  width: 100%;
  height: 42px;
  background-color: #136ac0;

  border-radius: 10px;
  font-size: 1.5rem;
`;

const ResultArea = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  gap: 8px;

  overflow-y: scroll;
`;

export default MyReview;
