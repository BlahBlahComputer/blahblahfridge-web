import { ApiResponse, ApiReturn, authApiAgent } from '#/@api';

export interface GetMenuListReturn extends ApiReturn {
  id: number;
  image: string | null;
  name: string;
  recipe: string;
  time: number;
  category: string;
}

export async function getMenuList(): Promise<ApiResponse<GetMenuListReturn[]>> {
  const { getRequest } = authApiAgent;

  const response = await getRequest<ApiResponse<GetMenuListReturn[]>>(`/menu`);

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '알 수 없는 오류가 발생했습니다.';
  }

  const { data } = response;

  return data;
}

export async function getMenuListWithKeyword(keyword: string): Promise<ApiResponse<GetMenuListReturn[]>> {
  const { getRequest } = authApiAgent;

  const response = await getRequest<ApiResponse<GetMenuListReturn[]>>(`/menu?name=${keyword}`);

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '알 수 없는 오류가 발생했습니다.';
  }

  const { data } = response;

  return data;
}
