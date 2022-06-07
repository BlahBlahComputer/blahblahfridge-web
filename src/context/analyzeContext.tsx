import { atom } from 'recoil';

import { RequestAnalyzeResult } from '#/components/analyze/api';

export const analyzeState = atom<RequestAnalyzeResult[]>({
  key: 'analyzeResult',
  default: [],
});
