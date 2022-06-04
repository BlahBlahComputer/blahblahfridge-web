import { QueryClient } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 0,
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
})

export default queryClient
