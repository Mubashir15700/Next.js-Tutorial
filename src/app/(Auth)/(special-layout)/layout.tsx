export default function SpecialLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h2>Special Layout</h2>
            {children}
        </>
    )
}
