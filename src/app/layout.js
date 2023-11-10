import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Aapda: Advanced Flood Management System for Kaziranga',
  description: 'Aapda leverages cutting-edge technology including satellite imagery, drones, and AI-driven computer vision to proactively address the flood challenges in Kaziranga, Assam, safeguarding both wildlife and human communities.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
