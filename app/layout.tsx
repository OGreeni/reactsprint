/* eslint-disable @next/next/no-page-custom-font */
import Footer from '@components/footer';
import Navigation from '@components/navigation';

import '@styles/global.css';

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
      <body className="max-w-8xl mx-auto flex h-screen flex-col bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] px-5">
        <header className="mb-32">
          <Navigation />
        </header>
        <main className="grid grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
