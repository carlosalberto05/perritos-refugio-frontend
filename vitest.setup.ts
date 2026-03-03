import React from "react";
import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => {
    return React.createElement("img", { alt: "", ...props, fill: props.fill ? "true" : undefined });
  },
}));

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "",
}));

// Mock API hooks
vi.mock("@/api/dogs", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/api/dogs")>();
  const { DOGS } = await import("@/data/home-data");
  return {
    ...actual,
    useDogs: vi.fn(() => ({
      data: DOGS,
      isLoading: false,
      error: null,
      status: "success",
    })),
    useAvailableDogs: vi.fn(() => ({
      data: DOGS.filter(d => d.adoptionStatus === "En adopción"),
      isLoading: false,
      error: null,
      status: "success",
    })),
  };
});

vi.mock("@/api/shelters", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/api/shelters")>();
  const { SHELTERS } = await import("@/data/home-data");
  return {
    ...actual,
    useShelters: vi.fn(() => ({
      data: SHELTERS,
      isLoading: false,
      error: null,
      status: "success",
    })),
  };
});

vi.mock("@/api/successStories", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/api/successStories")>();
  const { SUCCESS_STORIES } = await import("@/data/home-data");
  return {
    ...actual,
    useSuccessStories: vi.fn(() => ({
      data: SUCCESS_STORIES,
      isLoading: false,
      error: null,
      status: "success",
    })),
  };
});
