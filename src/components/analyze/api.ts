import { ApiResponse, authApiAgent } from '#/@api';

import { GetMenuListReturn } from '../MainContainer/api';

export type RequestAnalyzeResult = GetMenuListReturn;

export async function requestAnalyze({ key }: { key: string }): Promise<ApiResponse<RequestAnalyzeResult[]>> {
  const { postRequest } = authApiAgent;

  const response = await postRequest<ApiResponse<RequestAnalyzeResult[]>>(`/menu/analyze`, {
    key,
  });

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '알 수 없는 오류가 발생했습니다.';
  }

  return response.data;
}
