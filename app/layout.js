import { Roboto } from "next/font/google";
import Footer from "./_Components/Footer";
import Providerwrap from "./_Components/providerwrap";
import Header from "./_Components/Header";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Ecommerce Product Showcase",
  description: "Ecommerce Product Showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Providerwrap>
          <Header />
          {children}
          <Footer />
        </Providerwrap>
      </body>
    </html>
  );
}
