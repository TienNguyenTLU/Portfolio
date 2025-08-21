import './main.css'
import Info from './info';
import SepLine from './sepline';
import Bio from './bio';
import Skills from './skills';
import Desc from './desc';
import Toolbar from "./toolbar";
import ProjectList from './projectList';
import Contact from './contact_info';
import MapEmbed from './map';
export default function Main() {
    return (
        <main className="w-full min-h-screen bg-[#151312]">
            <Toolbar />
            <section id='0'>
            <div className='info-block'>
                <Bio />
                <Desc />
            </div>
            </section>
            <section id='1'>
            <div className='about-block'>
                <SepLine title="About Me" />
                <div className='info'>
                    <Info />
                    <Skills />
                </div>
            </div>
            </section>
            <section id='2'>
            <div className='projects-block'>
                <SepLine title="Projects" />
                <div className='projects'>
                    <ProjectList />
                </div>
            </div>
            </section>
            <section id='3'/>
            <div className='contact-block'>
                <SepLine title="Contact" />
                <div className='contact'>
                    <MapEmbed />
                    <Contact />
                </div>
            </div>
        </main>
    );
}