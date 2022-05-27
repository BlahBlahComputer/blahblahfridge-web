import styled, { keyframes } from 'styled-components';

import Logo from '#/asset/logo.svg';

function Start() {
  return <Text>뷁</Text>;
}

const Text = styled.span`
  display: flex;

  font-size: 3rem;
`;

const Title = styled.span`
  font-size: 2rem;

  max-width: 50px;
  word-break: keep-all;
`;

export default Start;
