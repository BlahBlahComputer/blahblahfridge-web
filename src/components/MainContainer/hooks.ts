import { useEffect, useMemo, useState } from 'react';
import { useMutation } from 'react-query';

import { ISearchResult } from '#/@types/search';
import useDebouncedState from '#/utils/useDebounceState';
import { ApiResponse } from '#/@api';

import { getMenuList, GetMenuListReturn, getMenuListWithKeyword } from './api';

function useSearch() {
  const [keyword, setKeyword] = useState('');
  const { debounced: debouncedKeyword } = useDebouncedState(keyword, 500);

  const [fetchData, setFetchData] = useState<ApiResponse<GetMenuListReturn[]> | undefined>(undefined);

  useEffect(() => {
    if (debouncedKeyword.length === 0) {
      search();
    } else {
      searchWithKeyword(debouncedKeyword);
    }
  }, [debouncedKeyword]);

  const { mutate: search } = useMutation(getMenuList, {
    onSuccess: (data) => {
      setFetchData(data);
    },
  });

  const { mutate: searchWithKeyword } = useMutation(getMenuListWithKeyword, {
    onSuccess: (data) => {
      setFetchData(data);
    },
  });

  const searchResult = useMemo(
    () =>
      fetchData?.data?.map((d) => {
        return {
          foodId: d.id,
          foodImageUrl: d.image,
          foodName: d.name,
          spendTime: d.time,
          category: d.categroy,
        } as ISearchResult;
      }) ?? [],
    [fetchData],
  );

  return {
    keyword,
    setKeyword,
    searchResult,
  };
}

export default useSearch;
