import './toolbar.css'
import { HomeIcon } from "lucide-react"
import { VscAccount, VscCallIncoming, VscCode, VscHome } from "react-icons/vsc"

export default function Toolbar()
{
    const navItems = [
        { name: "Home", href: "#0" , icon: <VscHome/>},
        { name: "About", href: "#1" ,icon: <VscAccount/>},
        { name: "Contact", href: "#3", icon: <VscCallIncoming/> },
        { name: "Projects", href: "#2", icon: <VscCode/> }
    ]
    return (
        <nav className="toolbar">
            <ul className="navList">
                {
                    navItems.map((item) => 
                    (
                        <li>
                            <a href={item.href}><span>{item.icon}</span>
                            <span className="tooltip">{item.name}</span></a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}