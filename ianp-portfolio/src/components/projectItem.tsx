

export default function ProjectItem({image, title, desc, skills}: 
        {image: string, title: string, desc: string, skills: string[]}) {
    return (
        <>
            <div className="project-top">
                <img className="project-img" src={image} />
                <h3 className="project-title">{title}</h3>
            </div>
            <div className="project-btm">
                <p className="project-subtitle">Description</p>
                <p className="text-p">{desc}</p>
                <br />
                <p className="project-subtitle">Skills Used</p>
                <ul className="project-skills">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <br />
                <button className="project-btn">View GitHub</button>
            </div>
        </>
    )
}