import './skillcard.css'
import Image from "next/image"
export default function SkillCard({item}) {
    return (
        <div className="skill-card">
            <Image src={item.icon} alt={item.name} width={50} height={50} className="skill-icon" />
            <h2 className="skill-name">{item.name}</h2>
        </div>
    )
}