export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}