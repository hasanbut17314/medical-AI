import { LoginForm } from "@/components/login-form"
import Image from "next/image"

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div>
                <Image
                    src="/auth.jpg"
                    alt="Login Image"
                    width={500}
                    height={500}
                    className="min-h-screen object-cover object-center shadow-lg w-[90%] lg:block hidden"
                />
            </div>
            <LoginForm />
        </div>
    )
}

export default Login