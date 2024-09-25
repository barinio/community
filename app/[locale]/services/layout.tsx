export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center max-w-7xl m-auto px-4">
      {children}
    </section>
  );
}
