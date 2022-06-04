import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { ISearchResult } from '#/@types/search';

import { getMenuList } from './api';

function useSearch() {
  const [keyword, setKeyword] = useState('');

  const { data: getMenuListData } = useQuery(['menuList'], () => getMenuList());

  const searchResult = useMemo(
    () =>
      getMenuListData?.data?.map((d) => {
        return {
          foodId: d.id,
          foodImageUrl: d.image,
          foodName: d.name,
          spendTime: d.time,
          category: d.categroy,
        } as ISearchResult;
      }) ?? [],
    [getMenuListData],
  );

  return {
    keyword,
    setKeyword,
    searchResult,
  };
}

export default useSearch;
