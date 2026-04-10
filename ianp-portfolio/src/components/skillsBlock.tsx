

export default function SkillsBlock({titles, images, isRed}: {titles: string[], images: string[], isRed: boolean}) {
    return (
        <>
            {isRed ?
            <div className="skills-block-red">
                {titles.map((title, index) =>
                    <div className="skills-item">
                        <img src={images[index]}></img>
                        <p>{title}</p>
                    </div>
                )}
            </div>
            :
            <div className="skills-block-blue">
                {titles.map((title, index) =>
                    <div className="skills-item">
                        <img src={images[index]}></img>
                        <p>{title}</p>
                    </div>
                )}
            </div>
            }
        </>
    )
}