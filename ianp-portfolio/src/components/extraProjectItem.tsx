

export default function ExtraProjectItem({title, desc, skills}: 
        {title: string, desc: string, skills: string[]}) {
    return (
        <>
            <div className="ex-project-item">
                <h3 className="project-title">{title}</h3>
                <p className="ex-project-desc">{desc}</p>
                {skills.map((skill, index) => (
                    <p key={index} className="ex-project-skill">{skill}</p>
                ))}
                <button className="ex-project-btn">View GitHub</button>
            </div>
        </>
    )
}