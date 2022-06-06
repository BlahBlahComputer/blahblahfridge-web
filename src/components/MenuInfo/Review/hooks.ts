import { useQuery } from 'react-query';

import { getMenuReviewInfo } from '../api';

function useReview(menuId: number) {
  const { data: reviewData } = useQuery(['reviewInfo', menuId], () => getMenuReviewInfo(menuId));

  return { reviewData };
}

export default useReview;
