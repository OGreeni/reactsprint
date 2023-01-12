/* eslint-disable @next/next/no-page-custom-font */
import { ClerkProvider } from '@clerk/nextjs/app-beta';
import AnalyticsWrapper from '@components/analytics-wrapper';
import Footer from '@components/footer';
import Navigation from '@components/navigation';
import ReactQueryWrapper from '@components/react-query-wrapper';
import { Nunito } from '@next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${nunito.variable} font-sans`}>
        <head />
        <body className="max-w-8xl mx-auto flex h-screen flex-col bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] px-5">
          <header className="mb-32">
            <Navigation />
          </header>
          <main className="grow">
            <ReactQueryWrapper>{children}</ReactQueryWrapper>
          </main>
          <Footer />
          <AnalyticsWrapper />
        </body>
      </html>
    </ClerkProvider>
  );
}
