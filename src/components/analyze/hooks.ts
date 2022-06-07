import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { analyzeState } from '#/context/analyzeContext';

import { requestAnalyze } from './api';

function useAnalyze() {
  const useQueryParam = () => new URLSearchParams(useLocation().search);
  const query = useQueryParam();

  const [analyzeResult, setAnalyzeResult] = useRecoilState(analyzeState);

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
        return;
      }

      setAnalyzeResult(data);
      window.location.href = '/analyze/result';
    },
  });
}

export default useAnalyze;
