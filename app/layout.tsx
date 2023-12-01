import type { Metadata } from 'next'
import {Poppins} from "next/font/google"
import './globals.css'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'
const poppins = Poppins({weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets:['latin']});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex min-h-screen flex-col`}>
      <Navbar/>
        {children}
      <Footer/>
        </body>
    </html>
  )
}
