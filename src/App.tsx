import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import RealEstate from "./pages/RealEstate.tsx";
import Architecture from "./pages/Architecture.tsx";
import Construction from "./pages/Construction.tsx";
import Interiors from "./pages/Interiors.tsx";
import Opportunities from "./pages/Opportunities.tsx";
import Partner from "./pages/Partner.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

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
