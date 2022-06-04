import { ApiResponse, unauthApiAgent } from '#/@api';

export async function kakaoLogin(code: string): Promise<ApiResponse<string>> {
  const { postRequest } = unauthApiAgent;

  const response = await postRequest<ApiResponse<string>>(`/kakao/login?code=${code}`);

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '알 수 없는 오류가 발생했습니다.';
  }

  const { data } = response;

  return data;
}
