import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

import { userImageState, userNameState } from '#/context/authContext';

import { userInfo } from './api';

function useTopBar() {
  const [userName, setUserName] = useRecoilState(userNameState);
  const [userImage, setUserImage] = useRecoilState(userImageState);

  useQuery(['userInfo'], () => userInfo(), {
    onSuccess: ({ data }) => {
      if (!data) return;

      setUserName(data.username);
      setUserImage(data.image);
    },
    staleTime: 60000,
    cacheTime: 60000,
  });

  return {
    userName,
    userImage,
  };
}

export default useTopBar;
