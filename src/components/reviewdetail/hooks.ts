import { useCallback } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { deleteReview, getReviewDetail } from './api';

export function useReviewDetail() {
  const { menuId, reviewId } = useParams<{ menuId: string; reviewId: string }>();

  const { data: reviewData } = useQuery(['reviewDetail', reviewId], () =>
    getReviewDetail({ reviewId: Number(reviewId) }),
  );

  const { mutate: deleteMutation } = useMutation(deleteReview, {
    onSuccess: () => {
      alert('삭졔!');
      window.location.href = `/menu/${menuId}`;
    },
    onError: (error) => {
      alert(error);
    },
  });

  const deleteFunc = useCallback(() => {
    deleteMutation({ reviewId: Number(reviewId) });
  }, [reviewId]);

  return {
    reviewData,
    deleteFunc,
  };
}
