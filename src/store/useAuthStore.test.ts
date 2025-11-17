import { describe, it, expect, beforeEach } from "vitest";
import { useAuthStore } from "./useAuthStore";

const initialState = useAuthStore.getState();

const mockUser = {
  id: "1",
  email: "test@example.com",
  name: "Test User",
  rol: "user" as const,
};

describe("useAuthStore", () => {
  // Reiniciar el estado antes de cada prueba
  beforeEach(() => {
    useAuthStore.setState(initialState);
  });

  it("should have initial state", () => {
    const state = useAuthStore.getState();

    expect(state.user).toBeNull();
    expect(state.isAuthenticated).toBe(false);
    expect(state.isLoading).toBe(false);
  });

  it("should login a user", () => {
    useAuthStore.getState().login(mockUser);
    const state = useAuthStore.getState();

    expect(state.user).toEqual(mockUser);
    expect(state.isAuthenticated).toBe(true);
    expect(state.isLoading).toBe(false);
  });

  it("should logout a user", () => {
    useAuthStore.getState().login(mockUser);
    useAuthStore.getState().logout();
    const state = useAuthStore.getState();

    expect(state.user).toBeNull();
    expect(state.isAuthenticated).toBe(false);
    expect(state.isLoading).toBe(false);
  });

  it("should update user information", () => {
    useAuthStore.getState().login(mockUser);
    useAuthStore.getState().updateUser({ name: "Updated Name" });

    const state = useAuthStore.getState();

    expect(state.user?.name).toBe("Updated Name");
    expect(state.user?.email).toBe(mockUser.email); // Verificar que el email no cambió));
  });

  it("should set loading state", () => {
    useAuthStore.getState().setLoading(true);
    expect(useAuthStore.getState().isLoading).toBe(true);

    useAuthStore.getState().setLoading(false);
    expect(useAuthStore.getState().isLoading).toBe(false);
  });
});
