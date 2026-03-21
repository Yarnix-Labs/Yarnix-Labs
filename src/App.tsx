import { useState, useEffect, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";
import SplashScreen from "@/components/SplashScreen";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar topBarVisible={false} />
      <main>
        <PageTransition>
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(() => {
    const seen = sessionStorage.getItem("splash_seen");
    return !seen;
  });

  const handleSplashComplete = useCallback(() => {
    sessionStorage.setItem("splash_seen", "1");
    setShowSplash(false);
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};
export default App;
