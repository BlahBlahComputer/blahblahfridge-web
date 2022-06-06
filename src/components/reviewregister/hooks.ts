import { useRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { useCallback, useMemo, useState } from 'react';
import dayjs from 'dayjs';

import { userImageState, userNameState } from '#/context/authContext';

import { reviewRegister } from './api';

export function useReviewRegister() {
  const { menuId } = useParams<{ menuId: string }>();

  const [userName] = useRecoilState(userNameState);
  const [userImage] = useRecoilState(userImageState);

  const [rate, setRate] = useState<number>(0);
  const [content, setContent] = useState<string>('');

  const today = useMemo(() => dayjs().format('YYYY.MM.DD'), []);

  const { mutate: register } = useMutation(reviewRegister, {
    onSuccess: ({ data }) => {
      if (!data) return;

      // eslint-disable-next-line no-alert
      alert('리뷰 등록 성공');
      window.location.href = `/menu/${menuId}`;
    },
  });

  const reviewRegisterFunc = useCallback(() => {
    register({
      menuId: Number(menuId),
      content,
      image: null,
      rate,
    });
  }, [register, menuId, content, rate]);

  return {
    userName,
    userImage,
    reviewRegisterFunc,
    rate,
    setRate,
    content,
    setContent,
    today,
  };
}
