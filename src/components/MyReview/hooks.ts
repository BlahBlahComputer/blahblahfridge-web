import { useState } from 'react';

import { IReviewResult } from '#/@types/review';

function useReview() {
  const [keyword, setKeyword] = useState('');
  const [reviewResult, setReviewResult] = useState<IReviewResult[]>([
    {
      foodId: 1,
      foodImageUrl: 'https://m.nongmin.com/upload/bbs/202108/20210821005357060/20210821005357060.jpg',
      foodName: '김치찌개',
      date: '22.05.06',
      star: '5',
      reviewText:
        '지옥에서 온 어쩌구저쩌구~ 레시피는 괜찮은 것 같은데 음 내가 똥손이려나? 근데 난 아무거나 잘 먹지롱 ㅋㅋ',
    },
    {
      foodId: 1,
      foodImageUrl: 'https://m.nongmin.com/upload/bbs/202108/20210821005357060/20210821005357060.jpg',
      foodName: '김치찌개',
      date: '22.05.06',
      star: '5',
      reviewText: '지옥에서 온 어쩌구저쩌구~',
    },
    {
      foodId: 1,
      foodImageUrl: 'https://m.nongmin.com/upload/bbs/202108/20210821005357060/20210821005357060.jpg',
      foodName: '김치찌개',
      date: '22.05.06',
      star: '5',
      reviewText: '지옥에서 온 어쩌구저쩌구~',
    },
    {
      foodId: 1,
      foodImageUrl: 'https://m.nongmin.com/upload/bbs/202108/20210821005357060/20210821005357060.jpg',
      foodName: '김치찌개',
      date: '22.05.06',
      star: '5',
      reviewText: '지옥에서 온 어쩌구저쩌구~',
    },
  ]);

  return {
    keyword,
    setKeyword,
    reviewResult,
  };
}

export default useReview;
