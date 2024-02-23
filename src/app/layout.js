
import { Crimson_Text, Playfair_Display, Ubuntu } from 'next/font/google'
import "./globals.css";
import Header from "@/components/header";
import Footer from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"


export const txtRegular = Crimson_Text({ 
  subsets: ['latin'], 
  variable: '--font-txtRegular',
  weight: [ '400','600'],
  style: ['normal', 'italic'],
  display: 'swap',

})

export const txtHeading = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-txtHeading',
  weight: [ '400','600','800'],
  style: ['normal'],
  display: 'swap',

})

export const davedev = Ubuntu({
  subsets: ['latin'],
  variable: '--font-davedev',
  weight: ['400','500','700'],
  style: ['normal'],
  display: 'swap',
})


export const metadata = {
  title: "Allan Banuelos Fotografia",
  description: "Explora el mágico mundo de la fotografía de bodas y de parejas con Allan Banuelos en Acapulco, Guerrero. Capturando los momentos eternos de amor y alegría. Contáctanos para servicios de fotografía de bodas memorables e impresionantes.",
  name:"viewport",
  content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${txtHeading.variable} ${txtRegular.variable} ${davedev.variable}`}>
      <body>
        <Header />
        {children}
        <Footer/>
        <Toaster />
      </body>
    </html>
  );
}
