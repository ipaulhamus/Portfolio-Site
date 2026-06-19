import '../css/projects.css';
import '../css/effects.css';

import { NavigateTo } from '../js/commonFunctions';

export default function ExtraProjectItem({title, desc, skills, link}: 
        {title: string, desc: string, skills: string[], link: string}) {
    return (
        <>
            <div className="ex-project-item">
                <h3 className="ex-project-name">{title}</h3>
                <p className="ex-project-desc">{desc}</p>
                <div className="ex-project-skills">
                {skills.map((skill, index) => (
                    <p key={index} className="ex-project-skill">{skill}</p>
                ))}
                </div>
                <button className="ex-project-btn btn-hover-effect"
                    onClick={() => NavigateTo(link)}>
                    View GitHub
                </button>
            </div>
        </>
    )
}