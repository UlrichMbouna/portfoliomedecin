import { Literata, Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import Header from "@/app/components/navbar";

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html
          lang="fr"
          className={`scroll-smooth ${literata.variable} ${hanken.variable}`}
      >
      <head>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header/>
      {children}
      </body >
      </html>
  )
}