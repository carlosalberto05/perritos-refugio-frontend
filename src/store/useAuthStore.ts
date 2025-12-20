import { create } from "zustand";

export type UserRole = "adoptante" | "rescatista" | "admin";

interface User {
  id: string;
  email: string;
  name: string;
  rol: UserRole;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  // Estado para el formulario de registro (UI)
  selectedRegistrationRole: "adoptante" | "rescatista";
}

interface AuthActions {
  login: (user: User) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  setLoading: (isLoading: boolean) => void;
  setRegistrationRole: (role: "adoptante" | "rescatista") => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  selectedRegistrationRole: "adoptante",

  login: (user: User) =>
    set({
      user,
      isAuthenticated: true,
      isLoading: false,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    }),

  updateUser: (updates: Partial<User>) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updates } : null,
    })),

  setLoading: (isLoading: boolean) => set({ isLoading }),

  setRegistrationRole: (role: "adoptante" | "rescatista") =>
    set({ selectedRegistrationRole: role }),
}));
