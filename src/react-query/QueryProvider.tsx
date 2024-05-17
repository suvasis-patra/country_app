import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type queryProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();
const QueryProvider = ({ children }: queryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
