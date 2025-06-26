import { ContactInfo } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import ContactButton from "../buttons/ContactButton"
import ViewProjects from "../buttons/ViewProjects"


function Hero() {
    return (
        <section className="flex items-center justify-center w-full rounded-3xl text-white py-8">
            <div className="flex flex-col justify-between w-full max-w-[920px] h-full px-4 gap-6">
                {/* Text Section */}
                <div className="flex flex-col gap-1">
                    <p className="text-2xl font-bold">hello!</p>
                    <p className="text-base text-gray-200">
                        I`m Faris, a software engineer specializing in front-end development.
                        <br />
                        Welcome to my portfolio website! 😎
                    </p>
                </div>

                {/* Icons + Buttons */}
                <div className="w-full flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                        {ContactInfo.map((icon, index) => (
                            <Link 
                                key={index} 
                                href={icon.linkTo} 
                                target={icon.iconName.includes("email") ? "" : "_blank"} 
                                className="relative group size-fit"
                            >
                                <Image 
                                src={icon.IconSrc} 
                                alt={icon.iconName} 
                                width={28} 
                                height={28}
                                />
                                <span 
                                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto select-text cursor-text z-10"
                                >
                                    {icon.linkTo.includes("mailto:")
                                        ? icon.linkTo.replace("mailto:", "")
                                        : icon.linkTo}
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col tablet:flex-row gap-2">
                        <ViewProjects />
                        <ContactButton className="px-4 py-1 text-sm font-medium tracking-wide uppercase bg-emerald-700 hover:bg-emerald-900  rounded-full transition cursor-pointer" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
