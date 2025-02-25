import Link from "next/link"

const Footer = () => {
    return(
        <footer className="w-full"> 
            <div className="flex items-center justify-center gap-2 mb-5">
                <div>
                    <Link href={'/privacy'} className="hover:text-orange">- Privacy</Link>
                </div>
                <div>
                    <Link href={'/terms'} className="hover:text-orange">- Terms</Link>
                </div>
            </div>
            <p className="text-xs text-center">© Fire Room. All rights reserved by Knight Studio!</p>
        </footer>
    )
}

export default Footer