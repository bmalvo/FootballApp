import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

export const App = () => {

  return <QueryClientProvider client={queryClient}>
    <h1>testing header</h1>
  </QueryClientProvider>
}