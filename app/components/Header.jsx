"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';


// This is the Header component, shows on both pages "/"
export default function Header() {

    {/* Created a variable to store the path*/}
    const pathname = usePathname();

    return (
        <header>
            <div id='header-container'>
            
            <img className='logo' src="/Images/logo.png" alt="logo" />
            
                <nav>

                

                    {pathname === '/' ? (
                        <Link href="/Leaderboard">
                        <button className='tapin-list'>
                            Leaderboard
                        </button>
                        </Link>
                    ):
                    (
                    <Link href="/">
                    <button className='blue-text'>
                        Home
                    </button>
                    </Link>
                    )}

                </nav>
            </div>
        </header>
    );
}