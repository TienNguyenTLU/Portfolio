import './skills.css';
import SkillCard from './skillcard';
export default function Skills() {
    const skills = [
        { name: 'JavaScript', icon: '/icons/javascript.png' },
        { name: 'Next.js', icon: '/icons/nextjs.png' },
        { name: 'Tailwind CSS', icon: '/icons/tailwindcss.png' },
        { name: 'HTML', icon: '/icons/html.png' },
        { name: 'CSS', icon: '/icons/css.png' },
        { name: 'Git', icon: '/icons/git.png' },
        { name: 'Node.js', icon: '/icons/nodejs.png' },
        { name: 'TypeScript', icon: '/icons/typescript.png' },
        { name: 'ReactJS ', icon: '/icons/reactjs.png' },
        { name: 'Figma', icon: '/icons/figma.png' },
    ]
    return (
        <div className="skill-block">
            <h1 className="skill-title">Skills</h1>
            <ul className="skill-list">
                {skills.map((skill, index) => (
                <SkillCard key={index} item={skill} />
            ))}
            </ul>     
        </div>
    )
}