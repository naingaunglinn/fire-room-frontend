import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between min-w-[600px] text-xl">
            <div>
                <Link href={'/'} className="hover:text-orange">Home</Link>
            </div>
            <div>
                <Link href={'/about'} className="hover:text-orange">About</Link>
            </div>
            <div>
                <Link href={'/contact'} className="hover:text-orange">Contact</Link>
            </div>
            <div>
                <Link href={'/faq'} className="hover:text-orange">FAQ</Link>
            </div>
            <div>
                <Link href={'/donate'} className="hover:text-orange">Donate</Link>
            </div>
        </header>
    )
} 

export default Header;