import '@/styles/index.scss';
import { M_PLUS_1p, Noticia_Text } from "next/font/google";
import "./globals.scss";

const mplus = M_PLUS_1p({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-mplus',
});

const noticia = Noticia_Text({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-noticia',
})

export const metadata = {
  title: "WebAnt Practice",
  description: "task 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mplus.variable} ${noticia.variable}`}>{children}</body>
    </html>
  );
}
