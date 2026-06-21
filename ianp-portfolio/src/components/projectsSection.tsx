import './projectsElements';
import { ProjectDescription, ProjectHeader } from './projectsElements';

import StuntCubeImg from '../assets/stunt-cube.png';
import SortVisualizerImg from '../assets/sorting-visualizer.png';
import StagesDotInkImg from '../assets/stages-dot-ink.png';

export default function ProjectsSection() {
    return (
        <>
        <div className="projects-container">
            <div className="project-display">
                <ProjectHeader image={SortVisualizerImg} title="Algorithm Visualizer" />
                <br />
                <ProjectDescription desc="This is a web application built using C# and Blazor that visualizes the process different sorting algorithms use to sort sets of integers. 
                This project was created in a college Data Structures and Algorithms class. 
                Once a sort completes, the application displays the best-case, average-case, and worst-case scenarios of the algorithm’s sorting processes in Big O notation."
                    skills="This project demostrates a proficiency in utilizing C# with the Blazor Framework, utilizing asynchonous tasks, and knowledge of efficiency concepts such as Big O Notation."
                    link="https://github.com/ipaulhamus/Algorithm-Visualizer"
                    btnText="View GitHub"
                />
            </div>

            <div className="project-display">
                <ProjectHeader image={StagesDotInkImg} title="Stages.Ink" />
                <br />
                <ProjectDescription desc="This project is an Electron.js application that functions as a desktop widget. The application shows the current available stagesa and modes to play in the online game Splatoon 3, 
                fetched periodically from an API. The application have a multitude of settings including the widget size, the color theme, and settings to automatically open upon boot."  
                    skills="This project demostrates proficiency in JavaScript, HTML, & CSS alongside usage of APIs. In addition, the project demonstrates an understanding of creating and releasing applications through Electron.js."
                    link="https://github.com/ipaulhamus/stages-dot-ink"
                    btnText="View GitHub"
                />
            </div>

            <div className="project-display">
                <ProjectHeader image={StuntCubeImg} title="Stunt Cube" />
                <br />
                <ProjectDescription desc="This project is a 2D Video Game in Unity that I created over the course of 2 months as my college capstone. The game features 3 different levels, with a mix of assets drawn by me in a 
                    pixel art application alongside free Unity Assets, starring a cube that jumps and dashes through various obstacles and enemies. "  
                    skills="This project demonstrates skills in the Software Development Lifecycle, with the project having many iterations of concepts and testing throughout it's 2 month development period. 
                    This game also displays a fundamental understanding of the Unity engine and Game Development."
                    link="https://ianp20.itch.io/stunt-cube"
                    btnText="View Itch.io"
                />
            </div>
        </div>
    </>
    )
}