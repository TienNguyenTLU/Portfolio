import './toolbar.css'
import { HomeIcon } from "lucide-react"
import { VscAccount, VscCallIncoming, VscCode, VscHome } from "react-icons/vsc"

export default function Toolbar()
{
    const navItems = [
        { name: "Home", href: "/" , icon: <VscHome/>},
        { name: "About", href: "/about" ,icon: <VscAccount/>},
        { name: "Contact", href: "/contact", icon: <VscCallIncoming/> },
        { name: "Projects", href: "/projects", icon: <VscCode/> }
    ]
    return (
        <nav className="toolbar">
            <ul className="navList">
                {
                    navItems.map((item) => 
                    (
                        <li>
                            <span>{item.icon}</span>
                            <span className="tooltip">{item.name}</span>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}