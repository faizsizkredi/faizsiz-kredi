
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SecondFooter from "./components/SecondFooter";
import PageNavigation from "./components/navigation/PageNavigation";
import AppRoutes from "./routes";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Router>
            <div className="min-h-screen flex flex-col bg-gray-50">
              <Header />
              <PageNavigation />
              <main className="flex-1">
                <AppRoutes />
              </main>
              <SecondFooter />
              <Footer />
            </div>
            <Toaster />
            <Sonner />
          </Router>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
