import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"


function Header() {
    return (
    <div className="w-full sticky top-0 bg-black/30 backdrop-blur-sm z-50">
        <DesktopHeader/>
        <MobileHeader/>
    </div>
    )
}

export default Header