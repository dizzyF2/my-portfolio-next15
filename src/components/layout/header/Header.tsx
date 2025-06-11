import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"


function Header() {
    return (
    <div className="w-full">
        <DesktopHeader/>
        <MobileHeader/>
    </div>
    )
}

export default Header