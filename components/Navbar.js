import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo1.png" width={128} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/user"><a>User</a></Link>
            
        </nav>
    );
}

export default Navbar;