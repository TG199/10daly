import { Navigate } from "react-router-dom";
import { useAppState } from "@/contexts/AppStateContext";

interface PublicRouteProps {
  children: React.ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { isAuthenticated, isOnboardingComplete } = useAppState();

  // If authenticated and onboarded, redirect to dashboard
  if (isAuthenticated && isOnboardingComplete) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
