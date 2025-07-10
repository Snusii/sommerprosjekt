"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";


// This is the Header component, shows on both pages "/"
export default function Header() {

    {/* Created a variable to store the path*/}
    const pathname = usePathname();

    return (

        <nav id='nav-container'>

           <Image src="/Images/logo.png" alt="TapIn logo" width={100} height={100}/>

            {pathname === '/' ? (
                <Link href="/Leaderboard">
                <button>
                    Leaderboard
                </button>
                </Link>
            ):
            (
            <Link href="/">
            <button>
                Home
            </button>
            </Link>
            )}

        </nav>
    );
}