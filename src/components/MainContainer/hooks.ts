import { useEffect, useMemo, useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation } from 'react-router-dom';

import { ISearchResult } from '#/@types/search';
import useDebouncedState from '#/utils/useDebounceState';
import { ApiResponse } from '#/@api';

import { getMenuList, GetMenuListReturn, getMenuListWithKeyword } from './api';

function useSearch() {
  const useQueryParam = () => new URLSearchParams(useLocation().search);
  const query = useQueryParam();

  const [keyword, setKeyword] = useState('');
  const { debounced: debouncedKeyword } = useDebouncedState(keyword, 500);

  const [fetchData, setFetchData] = useState<ApiResponse<GetMenuListReturn[]> | undefined>(undefined);

  useEffect(() => {
    const search = query.get('search');
    setKeyword(search ?? '');
  }, []);

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
          category: d.category,
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
