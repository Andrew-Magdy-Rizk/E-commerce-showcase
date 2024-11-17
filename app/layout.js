import { Roboto } from "next/font/google";
import Footer from "./_Components/Footer";
import Header from "./_Components/Header";
import "./globals.css";
import ProviderWrap from "./_Components/ProviderWrap";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "swap",
});

export const metadata = {
  title: "Ecommerce Product Showcase",
  description: "Ecommerce Product Showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ProviderWrap>
          <Header />
          {children}
          <Footer />
        </ProviderWrap>
      </body>
    </html>
  );
}
