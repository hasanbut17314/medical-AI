import { SignupForm } from "@/components/signup-form"
import Image from "next/image"

const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div>
                <Image
                    src="/auth.jpg"
                    alt="Signup Image"
                    priority
                    width={500}
                    height={500}
                    className="min-h-screen object-cover object-center shadow-lg w-[90%] lg:block hidden"
                />
            </div>
            <SignupForm />
        </div>
    )
}

export default Signup