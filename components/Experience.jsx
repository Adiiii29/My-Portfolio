import Image from "next/image";

const ExperienceData = [
    {
        logoSrc: "/assets/google.png",
        title: "Lead Software Engineer at Google",
        date: "Nov 2019-present",
        description:
            "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
    {
        logoSrc: "/assets/google.png",
        title: "Lead Software Engineer at Google",
        date: "Nov 2019-present",
        description:
            "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
    {
        logoSrc: "/assets/google.png",
        title: "Lead Software Engineer at Google",
        date: "Nov 2019-present",
        description:
            "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
];

export default function Experience() {
    return (
        <>
            <div className="bg-black text-white py-24">
                <div className="flex w-full max-w-[90%] mx-auto content-center py-4">
                    <div className="mx-auto">
                        <span className="text-2xl">My </span>
                        <span className="font-bold text-2xl">Experience</span>
                    </div>
                </div>

                <div className="w-full max-w-[90%] mx-auto">
                    {ExperienceData.map((data, index) => (
                        <div
                            key={index}
                            className="rounded-md border-2 border-[#635f5f] p-4 mb-4"
                        >
                            <div className="flex justify-between pb-2">
                                <div className="gap-4 flex items-center">
                                    <Image
                                        src={data.logoSrc}
                                        alt="google"
                                        width={32}
                                        height={32}
                                    />
                                    <span>{data.title}</span>
                                </div>
                                <span>{data.date}</span>
                            </div>

                            <div>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
