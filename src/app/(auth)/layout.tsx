export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
      <main className="flex-grow flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
