export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center max-w-7xl m-auto justify-center mt-[70px] mb-[90px]">
      <h1 className="hidden">DemoPage</h1>
      {children}
    </section>
  );
}
