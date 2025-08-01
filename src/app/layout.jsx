import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import AOSWrapper from '@/components/AOSWrapper';

export const metadata = {
  title: "sendCOI",
  description: "sendCOI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <AOSWrapper />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
