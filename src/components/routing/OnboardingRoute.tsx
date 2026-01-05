import { Navigate } from "react-router-dom";
import { useAppState } from "@/contexts/AppStateContext";

interface OnboardingRouteProps {
  children: React.ReactNode;
}

export function OnboardingRoute({ children }: OnboardingRouteProps) {
  const { isAuthenticated, isOnboardingComplete } = useAppState();

  // Must be authenticated to access onboarding
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  // If already onboarded, go to dashboard
  if (isOnboardingComplete) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
