import './main.css'
import Info from './info';
import SepLine from './sepline';
import Bio from './bio';
import Skills from './skills';
import Desc from './desc';
import Toolbar from "./toolbar";
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
        </main>
    );
}