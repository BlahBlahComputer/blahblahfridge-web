import { ApiResponse, unauthApiAgent } from '#/@api';

export async function naverLogin({ code, state }: { code: string; state: string }): Promise<ApiResponse<string>> {
  const { postRequest } = unauthApiAgent;

  const response = await postRequest<ApiResponse<string>>(`/naver/login?code=${code}&state=${state}`);

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '알 수 없는 오류가 발생했습니다.';
  }

  const { data } = response;

  return data;
}
