import { ApiResponse, ApiReturn, authApiAgent, unauthApiAgent } from '#/@api';

interface PresignUrlReturn extends ApiReturn {
  presignedURL: string;
  imageURL: string;
}
interface ReviewRegisterReturn extends ApiReturn {
  id: number;
  username: string;
  userimage: string | null;
  image: string | null;
  content: string;
  rate: number;
  created_at: string;
}

export async function reviewRegister({
  rate,
  content,
  image,
  menuId,
}: {
  rate: number;
  content: string;
  image: string | null;
  menuId: number;
}) {
  const { postRequest } = authApiAgent;

  const response = await postRequest<ApiResponse<ReviewRegisterReturn>>(`/review`, {
    rate,
    content,
    image,
    menuId,
  });

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '리뷰 등록 중 오류가 발생했습니다.';
  }

  return response.data;
}

export async function uploadImage({ file }: { file: File }): Promise<string> {
  const { getRequest } = authApiAgent;
  const { putRequest } = unauthApiAgent;

  const response = await getRequest<ApiResponse<PresignUrlReturn>>(`/review/upload`);

  if (!response.data.data) throw response.data.responseMessage;

  const { presignedURL, imageURL } = response.data.data;

  await putRequest(presignedURL, file);

  return imageURL;
}
