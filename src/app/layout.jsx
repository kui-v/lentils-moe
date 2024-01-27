import NavBar from '@/components/NavBar'
import { orbitron } from './fonts'
import { work_sans } from './fonts'
import './globals.css'

export const metadata = {
    icons: {
        icon: './favicon.ico'
    }
}

export default function RootLayout( {children} ) {
    return (
        <html lang='en' className={`${work_sans.variable} ${orbitron.variable}`}>
            <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
                <header>
                    <NavBar />
                </header>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}