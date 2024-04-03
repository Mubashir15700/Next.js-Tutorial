import Link from "next/link";

const App = () => {
    return (
        <>
            <div>Home Page</div>
            <Link href={"/blogs"}>Blogs</Link>
            <Link href={"/profile"}>Profile</Link>
        </>
    )
}

export default App;