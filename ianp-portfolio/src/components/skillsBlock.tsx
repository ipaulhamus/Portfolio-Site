import '../css/skills.css';

export default function SkillsBlock({titles, images, isRed}: {titles: string[], images: string[], isRed: boolean}) {
    return (
        <>
            <div className="skills-block-container">
                {isRed ?
                <div className="skills-block-red">
                    {titles.map((title, index) =>
                        <div className="skills-item">
                            <img className="skills-img" src={images[index]}></img>
                            <p className="skills-txt">{title}</p>
                        </div>
                    )}
                </div>
                :
                <div className="skills-block-blue">
                    {titles.map((title, index) =>
                        <div className="skills-item">
                            <img className="skills-img" src={images[index]}></img>
                            <p className="skills-txt">{title}</p>
                        </div>
                    )}
                </div>
                }
            </div>
        </>
    )
}