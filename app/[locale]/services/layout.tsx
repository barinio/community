export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center max-w-7xl m-auto px-4">
      {/* <div className="inline-block max-w-lg text-center justify-center"> */}
      {children}
      {/* </div> */}
    </section>
  );
}
