export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ padding: 20 }}>
      {/* <h2>Auth Layout</h2> */}
      {children}
    </div>
  );
}
