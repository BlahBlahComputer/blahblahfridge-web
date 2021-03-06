import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { analyzeState } from '#/context/analyzeContext';

import { requestAnalyze } from './api';

function useAnalyze() {
  const useQueryParam = () => new URLSearchParams(useLocation().search);
  const query = useQueryParam();

  const navigate = useNavigate();

  const [, setAnalyzeResult] = useRecoilState(analyzeState);

  const [finish, setFinish] = useState(false);

  useEffect(() => {
    const keyParam = query.get('key');

    if (keyParam) {
      analyze({ key: keyParam });
    } else {
      // eslint-disable-next-line no-alert
      alert('올바르지 않은 접근입니다.');
      window.history.back();
    }
  }, []);

  const { mutate: analyze } = useMutation(requestAnalyze, {
    onSuccess: ({ data }) => {
      if (!data) {
        alert('무언가 잘못되었습니다.');
      }
      // window.location.href = '/analyze/result';
      setAnalyzeResult(data ?? []);
      setFinish(true);
    },
  });

  useEffect(() => {
    if (finish) {
      navigate('/analyze/result');
    }
  });
}

export default useAnalyze;
