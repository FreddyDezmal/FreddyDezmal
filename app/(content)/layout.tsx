export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" className="flex-1">
      {children}
    </main>
  );
}
