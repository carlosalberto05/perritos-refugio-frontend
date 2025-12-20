import Link from "next/link";

const currentYear = new Date().getFullYear();

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Inicio", href: "/" },
      { name: "Adopción", href: "/adopcion" },
      { name: "Perritos", href: "/dogs" },
      { name: "Contacto", href: "/contact" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { name: "Donar", href: "/donate" },
      { name: "Preguntas Frecuentes", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Términos de Servicio", href: "/terms" },
      { name: "Política de Privacidad", href: "/privacy" },
      { name: "Cookies", href: "/cookies" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-surface-light text-gray-800 mt-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* (Logo y Enlaces) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Columna 1: Logo y Misión Breve */}
          <div>
            <Link
              href="/"
              className="text-2xl font-black text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span className="text-2xl">🐾</span> <span>Huellitas</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Rescatando corazones peludos y transformando vidas.
            </p>
          </div>

          {/* Columnas 2-4: Enlaces */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                {section.title}
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary-dark-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Copyright y Redes Sociales */}
        <div className="mt-8 pt-8 border-t border-gray-200 md:flex md:items-center md:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Huellitas. Todos los derechos reservados.
          </p>
          {/* Aquí irían iconos de Redes Sociales si los tuviéramos */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
