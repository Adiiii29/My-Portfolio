import Image from "next/image"
import { Download } from "lucide-react"

export default function Header() {
    return (
        <>
            <div className="w-full max-w-[90%] items-center mx-auto m-3 flex justify-between">
                <div className="flex items-center">
                    <Image src="/assets/logo.png" alt="logo" height={256} width={256} className="w-10 h-10" />
                    <span>Personal</span>
                </div>

                <div className="flex gap-4">
                    <div>About me</div>
                    <div>Skills</div>
                    <div>Proect</div>
                    <div>Contact me</div>
                </div>

                <div className="flex gap-2 bg-black text-white p-2 rounded-md">
                    Resume
                    <Download />
                </div>

            </div>
        </>
    );
}