import React from "react";
import Link from "next/link";

const Header = () => {

    const navigation = [
        {name: 'Home', href: '/'},
        {name: 'Coffee Shops', href: '/coffee-shops'},
        {name: 'About', href: '/about'},
    ]



    return (
        <header className="bg-zinc-50 border-b border-zinc-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/*Logo/Brand*/}
                <div className="flex items-center">
                    <Link href="/" className="text-zinc-800 font-bold text-xl">
                        BrewFinder
                    </Link>
                </div>

            {/* nav links */}
            <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                    <Link
                        key = {item.name}
                        href = {item.href}
                        className = "text-zinc-600 hover:text-zinc-900 transition:colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>


            </nav>
        </header>
    )
}

export default Header