import "../styles.css"

export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    login: React.ReactNode
}) {
    const isLoggedIn = true;

    return isLoggedIn ? (
        <div className="flex flex-col">
            <div className="flex-grow">
                {children}
            </div>
            <div className="p-4">
                <div className="bg-gray-200 flex justify-between">
                    <div className="w-1/2 pr-2">{users}</div>
                    <div className="w-1/2 pl-2">{revenue}</div>
                </div>
                <div className="bg-yellow-200 mt-4">{notifications}</div>
            </div>
        </div>
    ) : (
        <div className="flex flex-col">
            <div className="flex-grow">
                {login}
            </div>
        </div>
    )
}
