export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    if (new Date().getDay() === 4) {
        throw new Error("Error in blog layout");
    }

    return (
        <>
            {children}
            <h2>Featured Blogs</h2>
        </>
    )
}
