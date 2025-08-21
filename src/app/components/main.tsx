import './main.css'
import Info from './info';
import SepLine from './sepline';
import Bio from './bio';
import Skills from './skills';
import Desc from './desc';
import Toolbar from "./toolbar";
import ProjectList from './projectList';
export default function Main() {
    return (
        <main className="w-full min-h-screen bg-[#151312]">
            <Toolbar />
            <div className='info-block'>
                <Bio />
                <Desc />
            </div>
            <div className='about-block'>
                <SepLine title="About Me" />
                <div className='info'>
                    <Info />
                    <Skills />
                </div>
            </div>
            <div className='projects-block'>
                <SepLine title="Projects" />
                <div className='projects'>
                    <ProjectList />
                </div>
            </div>
        </main>
    );
}