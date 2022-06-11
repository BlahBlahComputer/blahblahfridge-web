import { ApiResponse, ApiReturn, authApiAgent, unauthApiAgent } from '#/@api';

interface PresignUrlReturn extends ApiReturn {
  presignedURL: string;
  imageURL: string;
}

export async function uploadImage({ file }: { file: File }): Promise<string> {
  const { getRequest } = authApiAgent;
  const { putRequest } = unauthApiAgent;

  const response = await getRequest<ApiResponse<PresignUrlReturn>>(`/menu/upload`);

  if (!response.data.data) throw response.data.responseMessage;

  const { presignedURL, imageURL } = response.data.data;

  await putRequest(presignedURL, file);

  return imageURL;
}
