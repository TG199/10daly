import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppStateProvider } from "@/contexts/AppStateContext";
import { ProtectedRoute } from "@/components/routing/ProtectedRoute";
import { PublicRoute } from "@/components/routing/PublicRoute";
import { OnboardingRoute } from "@/components/routing/OnboardingRoute";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import OnboardingPage from "./pages/OnboardingPage";
import DashboardPage from "./pages/DashboardPage";
import AlertsPage from "./pages/AlertsPage";
import MedicationConfirmPage from "./pages/MedicationConfirmPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppStateProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/auth"
              element={
                <PublicRoute>
                  <AuthPage />
                </PublicRoute>
              }
            />
            <Route
              path="/onboarding"
              element={
                <OnboardingRoute>
                  <OnboardingPage />
                </OnboardingRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alerts"
              element={
                <ProtectedRoute>
                  <AlertsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/medication-confirm"
              element={
                <ProtectedRoute>
                  <MedicationConfirmPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppStateProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
