import './projectList.css';
import Image from 'next/image';
import ProjectCard from './projectCard';
export default function ProjectList() {
    const projects = [
        {
            title: 'HighLands Coffee LandingPage', image: '/p1.png',
            description: 'A landing page for HighLands Coffee, a coffee shop website built with NextJS and Tailwind CSS.',
            link: 'https://high-lands-coffee.vercel.app/'
        },
        {
            title: 'Portfolio Website', image: '/portfolio.png',
            description: 'My personal portfolio website showcasing my skills and projects.',
            link: 'https://portfolio-six-sand-9bluk6kokv.vercel.app/'
        },
        {
            title: 'Weather App', image: '/Logo.png',
            description: 'A weather app built with React and NextJS. (In progress)',
            link: 'https://github.com/TienNguyenTLU/Weather_App-'
        },
        {
            title: 'Wonder Music', image: '/LogoMusic.png',
            description: 'An Music Straeming App built with NextJS and Cloudinary.',
            link: 'https://github.com/TienNguyenTLU/Wonder_Music_Frontend'
        }
        
    ]
    return (
        <div className='projects-list'>
            <ul className='projects-list-ul'>
                {projects.map((item, index) => (
                    <li key={index}>
                        <ProjectCard item={item} />
                    </li>
                ))}
            </ul>
            <p className='ps'>More projects coming in the future</p>
            </div>
    )
}