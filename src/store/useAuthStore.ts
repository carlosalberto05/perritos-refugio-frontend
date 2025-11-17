import { create } from "zustand";

interface User {
  id: string;
  email: string;
  name: string;
  rol: "admin" | "user";
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthActions {
  login: (user: User) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  setLoading: (loading: boolean) => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

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

  updateUser: (updateUser: Partial<User>) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updateUser } : null,
    })),

  setLoading: (isLoading: boolean) => set({ isLoading }),
}));
