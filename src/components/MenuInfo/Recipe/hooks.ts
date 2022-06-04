import { useQuery } from 'react-query';

import { getMenuRecipeInfo } from '../api';

function useRecipe(menuId: number) {
  const { data: recipeData } = useQuery(['recipeInfo', menuId], () => getMenuRecipeInfo(menuId), {
    cacheTime: 60000,
    staleTime: 60000,
  });

  return {
    recipeData,
  };
}

export default useRecipe;
