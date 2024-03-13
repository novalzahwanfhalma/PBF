import Link from "next/link";


export default function Home() {
    return (
        <div>
            <h1>Welcome to Home</h1>
            <Link href='/profile'>Profile</Link>
            <br></br>
            <Link href='/about'>About</Link>
            <br></br>
            <Link href='/blogs'>Blogs</Link>
            <br></br>
            <Link href='/products'>Products</Link>
        </div>
    );
}