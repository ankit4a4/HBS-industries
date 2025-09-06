import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HBS Industries - Premium Industrial Solutions',
  description: 'Leading manufacturer of scaffolds, ladders, raceways, and cable trays with Jindal aluminum extrusions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}