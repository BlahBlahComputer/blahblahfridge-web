import { ApiResponse, ApiReturn, authApiAgent } from '#/@api';

export interface GetMenuReviewReturn extends ApiReturn {
  id: number;
  username: string;
  userimage: string | null;
  content: string;
  rate: number;
  created_at: string;
}

export interface GetMenuIngredientReturn extends ApiReturn {
  id: number;
  name: string;
  category: string;
}

export interface GetMenuRecipeReturn extends ApiReturn {
  id: number;
  image: string | null;
  name: string;
  recipe: string;
  time: number;
  category: string;
}

export interface GetMenuInfoReturn extends ApiReturn {
  id: number;
  image: string | null;
  name: string;
  recipe: string;
  time: number;
  category: string;
}

export async function getMenuInfo(menuId: number): Promise<ApiResponse<GetMenuInfoReturn>> {
  const { getRequest } = authApiAgent;

  const response = await getRequest<ApiResponse<GetMenuInfoReturn>>(`/menu/${menuId}`);

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '알 수 없는 오류가 발생했습니다.';
  }

  const { data } = response;

  return data;
}

export async function getMenuRecipeInfo(menuId: number): Promise<ApiResponse<GetMenuRecipeReturn>> {
  const { getRequest } = authApiAgent;

  const response = await getRequest<ApiResponse<GetMenuRecipeReturn>>(`/menu/${menuId}`);

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '알 수 없는 오류가 발생했습니다.';
  }

  const { data } = response;

  return data;
}

export async function getMenuIngredientInfo(menuId: number): Promise<ApiResponse<GetMenuIngredientReturn[]>> {
  const { getRequest } = authApiAgent;

  const response = await getRequest<ApiResponse<GetMenuIngredientReturn[]>>(`/menu/${menuId}/ingredient`);

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '알 수 없는 오류가 발생했습니다.';
  }

  const { data } = response;

  return data;
}

export async function getMenuReviewInfo(menuId: number): Promise<ApiResponse<GetMenuReviewReturn[]>> {
  const { getRequest } = authApiAgent;

  const response = await getRequest<ApiResponse<GetMenuReviewReturn[]>>(`/menu/${menuId}/review`);

  if (response.data.responseMessage) {
    throw response.data.responseMessage || '알 수 없는 오류가 발생했습니다.';
  }

  const { data } = response;

  return data;
}
