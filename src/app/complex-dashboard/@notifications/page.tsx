import Link from "next/link"

const Notifications = () => {
    return (
        <>
            <div>Notifications</div>
            <Link href={"/complex-dashboard/archived"}>Archived</Link>
        </>
    )
}

export default Notifications