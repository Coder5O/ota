import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Contributions from "./pages/Contributions";
import Membership from "./pages/Membership";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import ChapterDetail from "./pages/ChapterDetail";
import NotFound from "./pages/NotFound";

// --- Scroll To Top Component ---
const ScrollToTop = () => {
  // We include 'search' so that changes like ?chapter=windhoek 
  // also trigger a scroll reset to the top
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};
// -------------------------------

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Resets scroll on every navigation and parameter change */}
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contributions" element={<Contributions />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/chapters/:slug" element={<ChapterDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;