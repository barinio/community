export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center pb-20">
      {children}
    </section>
  );
}
