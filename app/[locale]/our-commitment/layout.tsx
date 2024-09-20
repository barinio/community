export default function OurCommitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center max-w-7xl m-auto justify-center pt-8 md:pt-12 pb-[90px]">
      {children}
    </section>
  );
}
