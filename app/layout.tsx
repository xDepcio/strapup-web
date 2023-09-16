import Providers from '@/components/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

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
        <html lang="en" className='scroll-smooth'>
            <body className={cn(inter.className, "min-h-screen")}>
                <Analytics />
                <Providers>
                    <Toaster />
                    <NextTopLoader color='#4f46e5' />
                    <Navigation />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
