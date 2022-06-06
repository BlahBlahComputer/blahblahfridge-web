import { ApiResponse, ApiReturn, authApiAgent } from '#/@api';

export interface ReviewDetailReturn extends ApiReturn {
  id: number;
  username: string;
  userimage: string | null;
  image: string | null;
  content: string;
  rate: number;
  created_at: string;
}

export async function getReviewDetail({ reviewId }: { reviewId: number }): Promise<ApiResponse<ReviewDetailReturn>> {
  const { getRequest } = authApiAgent;

  const response = await getRequest<ApiResponse<ReviewDetailReturn>>(`/review/${reviewId}`);

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '알 수 없는 오류가 발생했습니다.';
  }

  return response.data;
}

export async function deleteReview({ reviewId }: { reviewId: number }): Promise<ApiResponse<void>> {
  const { deleteRequest } = authApiAgent;

  const response = await deleteRequest<ApiResponse<void>>(`/review/${reviewId}`);

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '알 수 없는 오류가 발생했습니다.';
  }

  return response.data;
}
