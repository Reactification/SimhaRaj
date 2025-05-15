import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DarkModeToggle from '@/components/DarkModeToggle';
import { ThemeProvider } from '@/components/DarkModeToggle/ThemeContext';
import FloatingCallButton from '@/components/FloatingCallButton';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Your Company Name',
  description: 'Your company description for SEO',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={poppins.className}>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <DarkModeToggle />
            <FloatingCallButton />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
