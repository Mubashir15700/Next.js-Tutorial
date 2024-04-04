import Link from "next/link"

const Outer = () => {
    return (
        <>
            <div>Outer</div>
            <Link href={"/outer/inner"}>Inner</Link>
        </>
    )
}

export default Outer