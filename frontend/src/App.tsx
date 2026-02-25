import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import PhasmaLanding from './pages/PhasmaLanding';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background dark">
        <PhasmaLanding />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
