import TitleBlock from "../components/titleBlock"
import ProjectsSection from "../components/projectsSection"
import ExtraProjectItem from "../components/extraProjectItem"

export default function Projects() {
    return ( 
    <>
        <div className="grey-background">
            <TitleBlock title="Projects" />
            <ProjectsSection />
            <br />
            <ExtraProjectItem 
                title="Ex. Project 1" 
                desc="Extra included project where I made a project using tools"
                skills={["skill 1", "skill 2, skill 3, skill 4"]}
            />
            <ExtraProjectItem 
                title="Ex. Project 1" 
                desc="Extra included project where I made a project using tools"
                skills={["skill 1", "skill 2, skill 3, skill 4"]}
            />
        </div>
    </>
    )
}