import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { userAuthState } from '#/context/authContext';

import { kakaoLogin } from './api';

function useKakaoCallback() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setIsAuth] = useRecoilState(userAuthState);

  const useQueryParam = () => new URLSearchParams(useLocation().search);
  const query = useQueryParam();

  useEffect(() => {
    const codeParam = query.get('code');

    if (codeParam) {
      login({ code: codeParam });
    } else {
      // eslint-disable-next-line no-alert
      alert('올바르지 않은 접근입니다.');
      window.history.back();
    }
  }, []);

  const { mutate: login } = useMutation(kakaoLogin, {
    onSuccess: ({ data }) => {
      if (!data) {
        alert('무언가 잘못되었습니다.');
        return;
      }

      localStorage.setItem('access_token', data);
      setIsAuth(true);
      window.location.href = '/';
    },
  });
}

export default useKakaoCallback;
