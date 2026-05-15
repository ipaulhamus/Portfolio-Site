import ExperienceArrow from '../assets/experience-arrow.png';
import Splash from '../assets/color-splat-1.png';

export default function Experience() {
    return (
        <>
            <div className="experience-container">
                <div className="experience-section">
                    <div className="text-container">
                        <p className="text-title">Programming Intern</p>
                        <p className="text-subtitle">Advantech Wireless</p>
                        <p className="text-p">June 2025 - November 2025</p>
                        <br />
                        <ul className="text-ul">
                            <li>Built a company database page using Razor Pages</li>
                            <li>Designed UI/UX utlizing HTML, CSS, and Bootstrap</li>
                            <li>Developed an amplifier disagnostics application using JavaScript</li>
                            <li>Collaborated with co-workers using Git</li>
                        </ul>
                    </div>
                    <img className="experience-deco" src={Splash} />
                </div>
                    
                <img className="arrow-img" src={ExperienceArrow} />

                <div className="experience-section">
                    <img className="experience-deco" src={Splash} />
                    <p className="text-title">Junior Programmer</p>
                    <p className="text-subtitle">Advantech Wireless</p>
                    <p className="text-p">November 2025 - Present</p>
                    <br />
                    <ul className="text-ul">
                        <li>Develops and maintains a database web application used to view product information and testing</li>
                        <li>Creating a serial communications API for Amplifiers</li>
                        <li>Scripts in C# and JavaScript</li>
                        <li>Uses MySQL for data anylasis</li>
                        <li>Collaborates with team members utlizing Git through BitBucket</li>
                    </ul>
                </div>
            </div>

            <div className="experience-container-mobile">
                <div className="experience-section-mobile">
                    <div className="text-container">
                        <p className="text-title">Programming Intern</p>
                        <p className="text-subtitle">Advantech Wireless</p>
                        <p className="text-p">June 2025 - November 2025</p>
                        <br />
                        <ul className="text-ul">
                            <li>Built a company database page using Razor Pages</li>
                            <li>Designed UI/UX utlizing HTML, CSS, and Bootstrap</li>
                            <li>Developed an amplifier disagnostics application using JavaScript</li>
                            <li>Collaborated with co-workers using Git</li>
                        </ul>
                    </div>
                </div>
                <br />
                <div className="experience-section-mobile">
                    <p className="text-title">Junior Programmer</p>
                    <p className="text-subtitle">Advantech Wireless</p>
                    <p className="text-p">November 2025 - Present</p>
                    <br />
                    <ul className="text-ul">
                        <li>Develops and maintains a database web application used to view product information and testing</li>
                        <li>Creating a serial communications API for Amplifiers</li>
                        <li>Scripts in C# and JavaScript</li>
                        <li>Uses MySQL for data anylasis</li>
                        <li>Collaborates with team members utlizing Git through BitBucket</li>
                    </ul>
                </div>
            </div>
        </>
    )
}