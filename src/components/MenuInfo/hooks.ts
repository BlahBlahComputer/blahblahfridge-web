import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getMenuInfo } from './api';

function useMenuInfo() {
  const { menuId } = useParams<{ menuId: string }>();

  const [selectButton, setSelectButton] = useState<number>(1);

  const isIngredient = useMemo(() => selectButton === 1, [selectButton]);
  const isRecipe = useMemo(() => selectButton === 2, [selectButton]);
  const isReview = useMemo(() => selectButton === 3, [selectButton]);

  const { data: menuInfoData } = useQuery(['menuInfo', Number(menuId)], () => getMenuInfo(Number(menuId)));

  return {
    setSelectButton,
    isIngredient,
    isRecipe,
    isReview,
    menuInfoData,
    menuId,
  };
}

export default useMenuInfo;
