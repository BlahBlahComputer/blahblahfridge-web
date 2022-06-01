import { useState } from 'react';

import { ISearchResult } from '#/@types/search';

function useSearch() {
  const [keyword1, setKeyword1] = useState('');
  const [searchResult, setSearchResult] = useState<ISearchResult[]>([
    {
      foodId: 1,
      foodImageUrl: 'https://m.nongmin.com/upload/bbs/202108/20210821005357060/20210821005357060.jpg',
      foodName: '김치찌개',
      spendTime: 10,
      category: '한식',
    },
  ]);

  return {
    keyword1,
    setKeyword1,
    searchResult,
  };
}

export default useSearch;
