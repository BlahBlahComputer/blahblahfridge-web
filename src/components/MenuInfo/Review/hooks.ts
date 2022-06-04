import { useQuery } from 'react-query';

import { getMenuReviewInfo } from '../api';

function useReview(menuId: number) {
  const { data: reviewData } = useQuery(['reviewInfo', menuId], () => getMenuReviewInfo(menuId), {
    staleTime: 60000,
    cacheTime: 60000,
  });

  return { reviewData };
}

export default useReview;
