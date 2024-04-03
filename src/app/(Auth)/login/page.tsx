"use client"
import { useRouter } from "next/navigation"

const Login = () => {
    const router = useRouter();

    const handleLogin = () => {
        console.log("Logging in");
        router.push("/");
        // router.push() router.replace() router.back() router.forward()
    }

    return (
        <>
            <div>Login</div>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login