import Image from "next/image"
import './projectCard.css';
import { Link } from "lucide-react";
import { VscLinkExternal } from "react-icons/vsc";
export default function ProjectCard({item}) {
    return (
        <div className='project-card'>
            <div className="project-image">
                <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    style={{ objectFit: "cover" }}/>
            </div>
            <div className='project-info'>
                <h3 className="project-name">{item.title}</h3>
                <p className="project-desc">{item.description}</p> 
            </div>
            <span className="linkex"><VscLinkExternal/></span>
        </div>
    )
}