import NavLinks from "./NavLinks"


function DesktopHeader() {
    return (
    <div className="hidden tablet:flex items-center justify-between px-5 py-2 bg-inherit border border-transparent border-b-gray-500">
        <h1 className="text-2xl text-white">
            Faris Abdelbagi
        </h1>
        <div className="capitalize flex items-center justify-end gap-9 text-sm text-gray-200">
            <NavLinks ScreenType="desktop"/>
        </div>
    </div>
    )
}

export default DesktopHeader