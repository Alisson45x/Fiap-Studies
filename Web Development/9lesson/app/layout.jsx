import "./globals.css";

export const metadata = {
  title: "Lesson 9",
  description: "React components lesson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
