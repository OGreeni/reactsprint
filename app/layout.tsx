/* eslint-disable @next/next/no-page-custom-font */
import "@styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;900&display=swap"
        rel="stylesheet"
      />
      <head />
      <body>{children}</body>
    </html>
  );
}
