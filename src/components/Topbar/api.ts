import { ApiResponse, ApiReturn, authApiAgent } from '#/@api';

interface UserInfoReturn extends ApiReturn {
  username: string;
  image: string | null;
}

export async function userInfo(): Promise<ApiResponse<UserInfoReturn>> {
  const { getRequest } = authApiAgent;

  const response = await getRequest<ApiResponse<UserInfoReturn>>(`/user`);

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '알 수 없는 오류가 발생했습니다.';
  }

  const { data } = response;

  return data;
}
