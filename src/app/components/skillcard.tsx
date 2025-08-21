import './skillcard.css'
import Image from "next/image"
type Skill = {
  name: string;
  icon: string;
};
export default function SkillCard({item}: {item: Skill}) {
    return (
        <div className="skill-card">
            <Image src={item.icon} alt={item.name} width={50} height={50} className="skill-icon" />
            <h2 className="skill-name">{item.name}</h2>
        </div>
    )
}