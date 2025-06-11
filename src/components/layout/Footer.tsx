import NavLinks from "./header/NavLinks";


export default function Footer() {

    return (
        <footer className="bg-transparent text-white py-6 text-center border-t border-[#2c2c2c]">
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-8 text-sm uppercase tracking-wide">
                <NavLinks ScreenType="footer"/>
            </div>
            <p className="text-xs text-gray-500">© 2025 Faris Abdelbagi. All Rights Reserved</p>
        </div>
        </footer>
    )
}
