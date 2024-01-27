import { orbitron } from './fonts'
import { work_sans } from './fonts'
import './globals.css'

export default function RootLayout( {children} ) {
    return (
        <html lang='en' className={`${work_sans.variable} ${orbitron.variable}`}>
            <main>
                {children}
            </main>

        </html>
    )
}