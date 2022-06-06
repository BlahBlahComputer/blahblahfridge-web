import styled from 'styled-components';

import useReview from './hooks';
import ReviewItem from './ReviewItem';

interface Props {
  menuId: number;
}

function Review({ menuId }: Props) {
  const { reviewData } = useReview(menuId);

  if (reviewData?.data?.length === 0) {
    return <ReviewArea>리뷰가 없다.. 어쩌지</ReviewArea>;
  }

  return (
    <ReviewArea>
      {reviewData?.data?.map((r) => {
        return (
          <ReviewItem
            key={r.id}
            username={r.username}
            userimage={r.userimage}
            content={r.content}
            rate={r.rate}
            created_at={r.created_at}
          />
        );
      })}
    </ReviewArea>
  );
}

export default Review;

const ReviewArea = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;

  width: 90%;
  height: calc(100vh - 432px);

  gap: 8px;

  border-radius: 10px;

  overflow-y: scroll;
  font-size: 1.2rem;

  word-break: break-word;

  padding: 8px;
`;
