import { Navigate } from "react-router-dom";
import { useAppState } from "@/contexts/AppStateContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isOnboardingComplete } = useAppState();

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  if (!isOnboardingComplete) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
}
