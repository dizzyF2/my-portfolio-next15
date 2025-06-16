import NavLinks from "./NavLinks"
import PersonalBrand from "./PersonalBrand"


function DesktopHeader() {
    return (
    <div className="hidden tablet:flex items-center justify-between px-5 py-2 bg-inherit border border-transparent border-b-gray-500">
        <PersonalBrand />
        <div className="capitalize flex items-center justify-end gap-9 text-sm text-gray-200">
            <NavLinks ScreenType="desktop"/>
        </div>
    </div>
    )
}

export default DesktopHeader