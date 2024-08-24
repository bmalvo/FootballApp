import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Bookmarks } from "./Bookmarks";

const queryClient = new QueryClient();

export const App = () => {

  return <QueryClientProvider client={queryClient}>
    <Bookmarks/>
  </QueryClientProvider>
}