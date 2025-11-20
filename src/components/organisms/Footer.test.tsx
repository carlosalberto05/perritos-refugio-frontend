import { render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";
import Footer from "./Footer";
import "@testing-library/jest-dom/vitest";

describe("Footer Component", () => {
  beforeEach(() => {
    // Renderizar el Footer antes de cada test
    render(<Footer />);
  });

  // ============================================
  // 1. PRUEBAS DE RENDERIZADO BÁSICO
  // ============================================

  test("renders the footer element", () => {
    const footer = screen.getByRole("contentinfo"); // <footer> tiene rol "contentinfo"
    expect(footer).toBeInTheDocument();
  });

  test("renders the Huellitas logo", () => {
    const logo = screen.getByText("Huellitas");
    expect(logo).toBeInTheDocument();
    expect(logo.closest("a")).toHaveAttribute("href", "/");
  });

  test("renders the mission statement", () => {
    expect(
      screen.getByText("Rescatando corazones peludos y transformando vidas.")
    ).toBeInTheDocument();
  });

  // ============================================
  // 2. PRUEBAS DE SECCIONES DE ENLACES
  // ============================================

  test("renders all section titles", () => {
    expect(screen.getByText("Navigation")).toBeInTheDocument();
    expect(screen.getByText("Ayuda")).toBeInTheDocument();
    expect(screen.getByText("Legal")).toBeInTheDocument();
  });

  test("renders Navigation section links", () => {
    expect(screen.getByRole("link", { name: "Inicio" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: "Adopción" })).toHaveAttribute(
      "href",
      "/adopcion"
    );
    expect(screen.getByRole("link", { name: "Perritos" })).toHaveAttribute(
      "href",
      "/dogs"
    );

    // Para "Contact" hay que usar getAllByRole porque aparece 2 veces
    const contactLinks = screen.getAllByRole("link", { name: "Contact" });
    expect(contactLinks[0]).toHaveAttribute("href", "/contact");
  });

  test("renders Ayuda section links", () => {
    expect(screen.getByRole("link", { name: "Donar" })).toHaveAttribute(
      "href",
      "/donate"
    );
    expect(screen.getByRole("link", { name: "Contacto" })).toHaveAttribute(
      "href",
      "/contact"
    );
    expect(
      screen.getByRole("link", { name: "Preguntas Frecuentes" })
    ).toHaveAttribute("href", "/faq");
  });

  test("renders Legal section links", () => {
    expect(
      screen.getByRole("link", { name: "Términos de Servicio" })
    ).toHaveAttribute("href", "/terms");
    expect(
      screen.getByRole("link", { name: "Política de Privacidad" })
    ).toHaveAttribute("href", "/privacy");
    expect(screen.getByRole("link", { name: "Cookies" })).toHaveAttribute(
      "href",
      "/cookies"
    );
  });

  // ============================================
  // 3. PRUEBAS DE COPYRIGHT
  // ============================================

  test("renders current year in copyright", () => {
    const currentYear = new Date().getFullYear();
    const copyrightText = `© ${currentYear} Huellitas. Todos los derechos reservados.`;
    expect(screen.getByText(copyrightText)).toBeInTheDocument();
  });

  test("copyright updates dynamically with year", () => {
    // Verifica que el año sea el actual (no hardcoded)
    const currentYear = new Date().getFullYear();
    const copyrightElement = screen.getByText(/© \d{4} Huellitas/);
    expect(copyrightElement.textContent).toContain(String(currentYear));
  });

  // ============================================
  // 4. PRUEBAS DE ACCESIBILIDAD
  // ============================================

  test("footer has correct semantic structure", () => {
    const footer = screen.getByRole("contentinfo");
    expect(footer.tagName).toBe("FOOTER");
  });

  test("all links have proper href attributes", () => {
    const allLinks = screen.getAllByRole("link");
    allLinks.forEach((link) => {
      expect(link).toHaveAttribute("href");
      expect(link.getAttribute("href")).not.toBe("");
    });
  });

  test("list elements use proper role", () => {
    const lists = screen.getAllByRole("list");
    expect(lists.length).toBeGreaterThan(0); // Debería haber al menos 3 listas
  });

  // ============================================
  // 5. PRUEBAS DE ESTILOS (OPCIONAL)
  // ============================================

  test("footer has correct background color class", () => {
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("bg-surface-light");
  });

  test("logo link has correct styling classes", () => {
    const logo = screen.getByText("Huellitas").closest("a");
    expect(logo).toHaveClass("text-2xl", "font-black", "text-sky-400");
  });

  // ============================================
  // 6. PRUEBA DE CONTEO DE ENLACES
  // ============================================

  test("renders correct number of navigation links", () => {
    const allLinks = screen.getAllByRole("link");
    // 1 logo + 4 Navigation + 3 Ayuda + 3 Legal = 11 total
    expect(allLinks).toHaveLength(11);
  });
});
