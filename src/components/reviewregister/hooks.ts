import { useRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { useCallback, useMemo, useRef, useState } from 'react';
import dayjs from 'dayjs';

import { userImageState, userNameState } from '#/context/authContext';

import { reviewRegister, uploadImage } from './api';

export function useReviewRegister() {
  const { menuId } = useParams<{ menuId: string }>();

  const [userName] = useRecoilState(userNameState);
  const [userImage] = useRecoilState(userImageState);

  const [rate, setRate] = useState<number>(0);
  const [content, setContent] = useState<string>('');

  const today = useMemo(() => dayjs().format('YYYY.MM.DD'), []);

  const fileRef = useRef<HTMLInputElement>(null);

  const [imageURL, setImageURL] = useState<string | null>(null);

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
      image: imageURL,
      rate,
    });
  }, [register, menuId, content, rate, imageURL]);

  const upload = async (file: File) => {
    const res = await uploadImage({ file });
    setImageURL(res);
  };

  const imageUploadFunc = () => {
    if (!fileRef.current) return;

    fileRef.current.click();
  };

  const onChange = async () => {
    if (fileRef.current?.files && fileRef.current.files[0]) {
      upload(fileRef.current.files[0]);
    }
  };

  return {
    userName,
    userImage,
    reviewRegisterFunc,
    rate,
    setRate,
    content,
    setContent,
    today,
    fileRef,
    imageUploadFunc,
    imageURL,
    onChange,
  };
}
