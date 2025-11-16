export const metadata = { title: 'PRM' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body style={{maxWidth:900,margin:'0 auto',padding:16}}>{children}</body></html>
  );
}
