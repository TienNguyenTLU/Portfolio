import './toolbar.css'
import { HomeIcon } from "lucide-react"
import { VscAccount, VscCallIncoming, VscCode, VscHome } from "react-icons/vsc"

export default function Toolbar()
{
    const navItems = [
        {id: 1, name: "Home", href: "#0" , icon: <VscHome/>},
        {id: 2, name: "About", href: "#1" ,icon: <VscAccount/>},
        {id:3, name: "Contact", href: "#3", icon: <VscCallIncoming/> },
        { id:4, name: "Projects", href: "#2", icon: <VscCode/> }
    ]
    return (
        <nav className="toolbar">
            <ul className="navList">
                {
                    navItems.map((item) => 
                    (
                        <li key={item.id}>
                            <a href={item.href}><span>{item.icon}</span>
                            <span className="tooltip">{item.name}</span></a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}