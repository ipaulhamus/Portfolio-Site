import './projectsElements';
import { ProjectDescription, ProjectHeader } from './projectsElements';


export default function ProjectsSection() {
    return (
        <>
        <div className="projects-container">
            <div className="project-display">
                <ProjectHeader image="" title="Project 1" />
                <br />
                <ProjectDescription desc="" skills="" />
            </div>

            <div className="project-display">
                <ProjectHeader image="" title="Project 2" />
                <br />
                <ProjectDescription desc="" skills="" />
            </div>

            <div className="project-display">
                <ProjectHeader image="" title="Project 3" />
                <br />
                <ProjectDescription desc="" skills="" />
            </div>
        </div>
    </>
    )
}