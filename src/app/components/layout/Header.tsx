import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-zinc-50 border-b border-zinc-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/*Logo/Brand*/}
                <div className="flex items-center">
                    <Link href="/" className="text-zinc-800 font-bold text-xl">
                        BrewFinder
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header