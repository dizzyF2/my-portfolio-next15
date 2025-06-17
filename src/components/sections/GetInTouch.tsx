import { ContactInfo } from "@/constants"
import Image from "next/image"
import Link from "next/link"


function GetInTouch() {
    return (
    <section id="contact" className="flex flex-col gap-5 items-center justify-center">
        <p className="text-2xl font-bold tracking-tighter tablet:text-4xl">
            get in touch
        </p>
        <p className="text-base tablet:text-xl">
            I`m currently open to new opportunities, inbox is always open! Find me everywhere
        </p>
        <div className="flex items-center justify-around w-[50%]">
            {ContactInfo.map((icon, index) => (
                <Link 
                    key={index} 
                    href={icon.linkTo} 
                    target={icon.iconName.includes("email") ? "" : "_blank"} 
                    className="relative group size-fit filter hover:brightness-200"
                >
                    <Image 
                        src={icon.IconSrc} 
                        alt={icon.iconName} 
                        width={28} 
                        height={28} 
                        className="filter brightness-200"
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
    </section>
    )
}

export default GetInTouch