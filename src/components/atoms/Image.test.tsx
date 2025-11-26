import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Image Component", () => {
  const defaultProps = {
    src: "/test-image.jpg",
    alt: "Test Image",
    width: 100,
    height: 100,
  };

  it("renders image with required props", () => {
    render(<Image {...defaultProps} />);

    const image = screen.getByAltText("Test Image");
    expect(image).toBeInTheDocument();
  });

  it("renders with custom alt text", () => {
    render(<Image {...defaultProps} alt="Custom Alt Text" />);

    const image = screen.getByAltText("Custom Alt Text");
    expect(image).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Image {...defaultProps} className="custom-class" />);

    const image = screen.getByAltText("Test Image");
    expect(image).toHaveClass("custom-class");
  });

  it("applies rounded classes when rounded is true", () => {
    render(<Image {...defaultProps} rounded />);

    const image = screen.getByAltText("Test Image");
    expect(image).toHaveClass("rounded-lg"); // Default roundedSize
  });

  it("applies custom rounded size", () => {
    render(<Image {...defaultProps} rounded roundedSize="2xl" />);

    const image = screen.getByAltText("Test Image");
    expect(image).toHaveClass("rounded-2xl");
  });

  it("does not apply rounded classes when rounded is false", () => {
    render(<Image {...defaultProps} rounded={false} />);

    const image = screen.getByAltText("Test Image");
    expect(image.className).not.toContain("rounded");
  });

  it("combines rounded and custom className", () => {
    render(
      <Image {...defaultProps} rounded className="custom-class" />
    );

    const image = screen.getByAltText("Test Image");
    expect(image).toHaveClass("rounded-lg");
    expect(image).toHaveClass("custom-class");
  });

  it("passes through Next.js Image props", () => {
    render(
      <Image
        {...defaultProps}
        priority
        quality={90}
      />
    );

    const image = screen.getByAltText("Test Image");
    expect(image).toBeInTheDocument();
  });

  it("renders with fill prop", () => {
    const { container } = render(
      <div style={{ position: "relative", width: "200px", height: "200px" }}>
        <Image src="/test.jpg" alt="Fill Image" fill />
      </div>
    );

    const image = screen.getByAltText("Fill Image");
    expect(image).toBeInTheDocument();
  });

  it("renders with all rounded size options", () => {
    const sizes: Array<"sm" | "md" | "lg" | "xl" | "2xl" | "full"> = [
      "sm",
      "md",
      "lg",
      "xl",
      "2xl",
      "full",
    ];

    sizes.forEach((size, index) => {
      const { unmount } = render(
        <Image 
          {...defaultProps} 
          alt={`Test Image ${index}`}
          rounded 
          roundedSize={size} 
        />
      );

      const image = screen.getByAltText(`Test Image ${index}`);
      expect(image).toHaveClass(`rounded-${size}`);

      unmount();
    });
  });
});
