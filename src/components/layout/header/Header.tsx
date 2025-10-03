import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"


function Header() {
    return (
    <div className="w-full sticky top-0 z-50">
        <DesktopHeader/>
        <MobileHeader/>
    </div>
    )
}

export default Header