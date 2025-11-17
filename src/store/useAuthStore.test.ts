import { describe, it, expect, beforeEach } from "vitest";
import { useAuthStore } from "./useAuthStore";

describe("useAuthStore", () => {
  beforeEach(() => {
    useAuthStore.setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  });

  it("should have initial state", () => {
    const state = useAuthStore.getState();

    expect(state.user).toBeNull();
    expect(state.isAuthenticated).toBe(false);
    expect(state.isLoading).toBe(false);
  });

  it("should login a user", () => {
    const mockUser = {
      id: "1",
      email: "test@example.com",
      name: "Test User",
      rol: "user" as const,
    };

    useAuthStore.getState().login(mockUser);
    const state = useAuthStore.getState();

    expect(state.user).toEqual(mockUser);
    expect(state.isAuthenticated).toBe(true);
    expect(state.isLoading).toBe(false);
  });

  it("should logout a user", () => {
    const mockUser = {
      id: "1",
      email: "test@test.com",
      name: "Test User",
      rol: "user" as const,
    };

    useAuthStore.getState().login(mockUser);
    useAuthStore.getState().logout();
    const state = useAuthStore.getState();

    expect(state.user).toBeNull();
    expect(state.isAuthenticated).toBe(false);
    expect(state.isLoading).toBe(false);
  });

  it("should update user information", () => {
    const mockUser = {
      id: "1",
      email: "test@test.com",
      name: "Test User",
      rol: "user" as const,
    };

    useAuthStore.getState().login(mockUser);
    useAuthStore.getState().updateUser({ name: "Updated Name" });

    const state = useAuthStore.getState();

    expect(state.user?.name).toBe("Updated Name");
    expect(state.user?.email).toBe("test@test.com");
  });

  it("should set loading state", () => {
    useAuthStore.getState().setLoading(true);
    expect(useAuthStore.getState().isLoading).toBe(true);

    useAuthStore.getState().setLoading(false);
    expect(useAuthStore.getState().isLoading).toBe(false);
  });
});
