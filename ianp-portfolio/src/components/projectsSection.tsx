import './projectsElements';
import { ProjectDescription, ProjectHeader } from './projectsElements';


export default function ProjectsSection() {
    return (
        <>
        <div className="projects-container">
            <div className="project-display">
                <ProjectHeader image="https://placehold.co/600x400" title="Project 1" />
                <br />
                <ProjectDescription desc="This project is filler. The purpose is to fill space, 
                    it uses the space filler framework in the placeholder language. 
                    This project shows my skills in placeholding." 
                    skills="This project demenstrates proficiency in filling space and using time effectively." />
            </div>

            <div className="project-display">
                <ProjectHeader image="https://placehold.co/600x400" title="Project 2" />
                <br />
                <ProjectDescription desc="This project is filler. The purpose is to fill space, 
                    it uses the space filler framework in the placeholder language. 
                    This project shows my skills in placeholding."  
                skills="This project demenstrates proficiency in filling space and using time effectively." />
            </div>

            <div className="project-display">
                <ProjectHeader image="https://placehold.co/600x400" title="Project 3" />
                <br />
                <ProjectDescription desc="This project is filler. The purpose is to fill space, 
                    it uses the space filler framework in the placeholder language. 
                    This project shows my skills in placeholding."  
                    skills="This project demenstrates proficiency in filling space and using time effectively." />
            </div>
        </div>
    </>
    )
}