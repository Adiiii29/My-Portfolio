import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="w-full max-w-[90%] mx-auto py-16">
                <div className="grid grid-cols-2 gap-8">
                    <div className="">
                        <Image
                            src="/assets/Group 1000015845.png"
                            alt="Aditya Shah"
                            width={1080}
                            height={1080}
                        />
                    </div>
                    <div className="p-4">
                        <div>
                            <span className="text-4xl">About </span>
                            <span className="font-bold text-4xl">Me</span>
                        </div>
                        <div className="flex-col text-xl">
                            <p className="py-2">
                                I'm a passionate, self-proclaimed designer who specializes in
                                full stack development(React.js & Node.js). I am very
                                enthusiastic about bringing the technical and visual aspects of
                                digital products to life. User experience, pixel perfect design,
                                and writing clear, readable, highly performant code matters to
                                me.
                            </p>
                            <p className="py-2">
                                I began my journey as a web developer in 2015, and since then,
                                I've continued to grow and evolve as a developer, taking on new
                                challenges and learning the latest technologies along the way.
                                Now, in my early thirties, 7 years after starting my web
                                development journey, I'm building cutting-edge web applications
                                using modern technologies such as Next.js, TypeScript, Nestjs,
                                Tailwindcss, Supabase and much more.
                            </p>
                            <p className="py-2">
                                When I'm not in full-on developer mode, you can find me hovering
                                around on twitter or on indie hacker, witnessing the journey of
                                early startups or enjoying some free time. You can follow me on
                                Twitter where I share tech-related bites and build in public, or
                                you can follow me on GitHub.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex p-8">
                <div>
                    <Image className="mr-10"
                        src="/assets/Group 1000015845.png"
                        alt="Aditya Shah"
                        width={2080}
                        height={2080}
                    />
                </div>
                <div className="pl-6">
                    <div className="flex w-full max-w-[90%] ml-4 pb-4 pt-8">
                        <div>
                            <span className="text-6xl">About </span>
                            <span className="font-bold text-6xl">Me</span>
                        </div>
                    </div>
                    <div className="ml-4 text-[20px]">
                        <p className="py-2">
                            I'm a passionate, self-proclaimed designer who specializes in full
                            stack development(React.js & Node.js). I am very enthusiastic
                            about bringing the technical and visual aspects of digital
                            products to life. User experience, pixel perfect design, and
                            writing clear, readable, highly performant code matters to me.
                        </p>
                        <p className="py-2">
                            I began my journey as a web developer in 2015, and since then,
                            I've continued to grow and evolve as a developer, taking on new
                            challenges and learning the latest technologies along the way.
                            Now, in my early thirties, 7 years after starting my web
                            development journey, I'm building cutting-edge web applications
                            using modern technologies such as Next.js, TypeScript, Nestjs,
                            Tailwindcss, Supabase and much more.
                        </p>
                        <p className="py-2">
                            When I'm not in full-on developer mode, you can find me hovering
                            around on twitter or on indie hacker, witnessing the journey of
                            early startups or enjoying some free time. You can follow me on
                            Twitter where I share tech-related bites and build in public, or
                            you can follow me on GitHub.
                        </p>
                    </div>
                </div>
            </div> */}
        </>
    );
}
