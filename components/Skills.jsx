import Image from "next/image";

const skills = [
    {
        name: "Git",
        icon: "/assets/logo.png",
    },
    {
        name: "Javascript",
        icon: "/assets/logo.png",
    },
    {
        name: "Sass/Scss",
        icon: "/assets/logo.png",
    },
    {
        name: "Nest.Js",
        icon: "/assets/logo.png",
    },
    {
        name: "Storybook",
        icon: "/assets/logo.png",
    },
    {
        name: "Nest.Js",
        icon: "/assets/logo.png",
    },
    {
        name: "Git",
        icon: "/assets/logo.png",
    },
    {
        name: "Storybook",
        icon: "/assets/logo.png",
    },
    {
        name: "Socket.Io",
        icon: "/assets/logo.png",
    },
    {
        name: "Sass/Scss",
        icon: "/assets/logo.png",
    },
];

export default function Skills() {
    return (
        <>
            <div className="py-32">
                <div className="flex w-full max-w-[90%] mx-auto content-center pb-4">
                    <div className="mx-auto">
                        <span className="text-2xl">My </span>
                        <span className="font-bold text-2xl">Skills</span>
                    </div>
                </div>
                <div className="max-w-[90%] mx-auto w-[700px]">
                    <div className="grid grid-cols-5 gap-4 item-center mx-auto">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col w-[128px] h-[128px] items-center rounded-sm justify-center border-2 border-[#000]"
                                style={{ aspectRatio: "1/1" }}
                            >
                                <div className="w-16 h-16">
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={90}
                                        height={90}
                                    />
                                </div>
                                <span className="text-center">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
