import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
// import AOSWrapper from "@/components/AOSWrapper"; // Uncomment only if needed

export const metadata = {
  title: "sendCOI",
  description: "Easily send Certificates of Insurance (COIs) with sendCOI – streamline insurance documentation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>

      <body>
        {/* <AOSWrapper /> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
