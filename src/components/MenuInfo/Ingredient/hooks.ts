import { useQuery } from 'react-query';

import { getMenuIngredientInfo } from '../api';

function useIngredient(menuId: number) {
  const { data: ingredientData } = useQuery(['ingredientInfo', menuId], () => getMenuIngredientInfo(menuId), {
    staleTime: 60000,
    cacheTime: 60000,
  });

  return { ingredientData };
}

export default useIngredient;
