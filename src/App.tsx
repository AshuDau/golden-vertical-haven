import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import RealEstate from "./pages/RealEstate";
import Architecture from "./pages/Architecture";
import Construction from "./pages/Construction";
import Interiors from "./pages/Interiors";
import Opportunities from "./pages/Opportunities";
import Partner from "./pages/Partner";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/interiors" element={<Interiors />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
