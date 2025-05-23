
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Retailers from "./pages/Retailers";
import Demo from "./pages/Demo";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Journey from "./pages/Journey";
import NotFound from "./pages/NotFound";
import BillingFormPage from "./pages/BillingFormPage";
import ScratchCardPage from "./pages/ScratchCardPage";
import RetailerDashboard from "./pages/RetailerDashboard";
import QRScanner from "./components/QRScanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/retailers" element={<Retailers />} />
          <Route path="/retailer-dashboard" element={<RetailerDashboard />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/billing-form/:retailerId" element={<BillingFormPage />} />
          <Route path="/scratch-card" element={<ScratchCardPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Floating QR Scanner Button */}
        <QRScanner isFloating={true} />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
