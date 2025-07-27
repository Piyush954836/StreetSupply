import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import VendorDashboard from "./pages/VendorDashboard";
import VendorRegister from "./components/vendor/VendorRegister";
import VendorLogin from "./components/vendor/VendorLogin";
import SupplierRegister from "./components/supplier/SupplierRegister";
import SupplierLogin from "./components/supplier/SupplierLogin";
import SupplierDashboard from "./components/supplier/SupplierDashboard";
import ProtectedSupplierRoute from "./components/supplier/ProtectedSupplierRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Index />} />
          <Route path="/vendor/register" element={<VendorRegister />} />
          <Route path="/vendor/login" element={<VendorLogin />} />
          <Route path="/supplier/register" element={<SupplierRegister />} />
          <Route path="/supplier/login" element={<SupplierLogin />} />

          {/* PROTECTED ROUTES */}
          <Route element={<ProtectedRoute />}>
            <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          </Route>
          <Route element={<ProtectedSupplierRoute />}>
            <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
          </Route>

          <Route path="/admin" element={<AdminDashboard />} />

          {/* CATCH-ALL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
