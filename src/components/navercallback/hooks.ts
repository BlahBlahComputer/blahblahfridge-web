import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useNaverCallback() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const [code, setCode] = useState<string>('');
  const [state, setState] = useState<string>('');

  useEffect(() => {
    const codeParam = query.get('code');
    const stateParam = query.get('state');

    if (codeParam && stateParam) {
      setCode(codeParam);
      setState(stateParam);
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

export default useNaverCallback;
