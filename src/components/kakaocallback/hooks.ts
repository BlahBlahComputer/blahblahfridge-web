import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useKakaoCallback() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    const codeParam = query.get('code');

    if (codeParam) {
      setCode(codeParam);
    } else {
      // eslint-disable-next-line no-alert
      alert('올바르지 않은 접근입니다.');
      window.history.back();
    }
  }, []);

  return {
    useQuery,
  };
}

export default useKakaoCallback;
