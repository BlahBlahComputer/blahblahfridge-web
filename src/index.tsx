import React from 'react';
import { render } from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import GlobalStyle from '#/styles/globalStyle';
import { PageContainer } from '#/components/common/style';

import App from './App';
import reportWebVitals from './reportWebVitals';
import queryClient from './@api/reactQueryClient';

render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <PageContainer>
          <App />
        </PageContainer>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
