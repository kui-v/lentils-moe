import Link from 'next/link';

export default function NavBar() {
    return (
        <nav>
            <ul className="flex gap-2">
                <Link href="/" className="font-bold font-orbitron
                         text-orange-800 hover:underline">
                    Home
                </Link>
            </ul>
        </nav>
    )
}