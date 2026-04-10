

export function ProjectHeader({image, title}: {image: string, title: string}) {
    return (
    <>
        <div className="project-header-body">
            <img src={image} className="project-img" />
            <h2 className="project-name">{title}</h2>
        </div>
    </>
    )

}

export function ProjectDescription({desc, skills}: {desc: string, skills: string}) {
    return (
        <>
        <div className="project-body">
            <h2 className="project-desc-title">Description</h2>
            <p className="project-content">{desc}</p>
            <br />
            <h2 className="project-desc-title">Skills Used</h2>
            <p className="project-content">{skills}</p>
        </div>
        </>
    )
}