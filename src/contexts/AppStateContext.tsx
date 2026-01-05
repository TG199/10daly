import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AppState {
  isAuthenticated: boolean;
  isOnboardingComplete: boolean;
  isMedicationConfirmedToday: boolean;
  parentName: string;
}

interface AppStateContextType extends AppState {
  login: () => void;
  logout: () => void;
  completeOnboarding: (parentName: string) => void;
  confirmMedication: () => void;
}

const defaultState: AppState = {
  isAuthenticated: false,
  isOnboardingComplete: false,
  isMedicationConfirmedToday: false,
  parentName: "",
};

const STORAGE_KEY = "tenderly-app-state";

const AppStateContext = createContext<AppStateContextType | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Reset medication confirmation if it's a new day
        const lastConfirmDate = localStorage.getItem("tenderly-medication-date");
        const today = new Date().toDateString();
        if (lastConfirmDate !== today) {
          parsed.isMedicationConfirmedToday = false;
        }
        return { ...defaultState, ...parsed };
      } catch {
        return defaultState;
      }
    }
    return defaultState;
  });

  // Persist state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const login = () => {
    setState((prev) => ({ ...prev, isAuthenticated: true }));
  };

  const logout = () => {
    setState(defaultState);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("tenderly-medication-date");
  };

  const completeOnboarding = (parentName: string) => {
    setState((prev) => ({
      ...prev,
      isOnboardingComplete: true,
      parentName,
    }));
  };

  const confirmMedication = () => {
    setState((prev) => ({ ...prev, isMedicationConfirmedToday: true }));
    localStorage.setItem("tenderly-medication-date", new Date().toDateString());
  };

  return (
    <AppStateContext.Provider
      value={{
        ...state,
        login,
        logout,
        completeOnboarding,
        confirmMedication,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider");
  }
  return context;
}
