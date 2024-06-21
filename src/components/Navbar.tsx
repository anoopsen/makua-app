import Link from 'next/link';


const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-800 p-4">

            <div>
                <Link href="/" className="text-white mr-4">Home</Link>
                <Link href="/profile" className="text-white">Profile</Link>
            </div>
        </nav>
    );
};

export default Navbar;
