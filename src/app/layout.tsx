import './globals.css'
import { Outfit } from 'next/font/google'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({
  weight: '400',
  variable: '--font-orbitron',
  subsets: ['latin'],
})

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Spyro Fitness App',
  description:
    'Transform your body and enhance your fitness journey with our expert trainers, cutting-edge equipment, and personalized workout plans for optimal results and improved well-being.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-black text-white transition overflow-x-hidden ${outfit.className} ${orbitron.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
