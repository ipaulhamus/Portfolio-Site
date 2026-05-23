import ExperienceArrow from '../assets/experience-arrow.png';
import Splash from '../assets/color-splat-1.png';
import '../css/experience.css'
import TitleBlock from '../components/titleBlock';

export default function Experience() {
    return (
        <>
            <TitleBlock title="Experience" />
            <br />
            <div className="experience-container">
                <div className="experience-section">
                    <div className="text-container">
                        <p className="text-title">Programming Intern</p>
                        <p className="text-subtitle">Advantech Wireless</p>
                        <p className="text-surtitle">June 2025 - November 2025</p>
                        <ul className="text-ul">
                            <li>Built a company database page using Razor Pages</li>
                            <li>Designed UI/UX utlizing HTML, CSS, and Bootstrap</li>
                            <li>Developed an amplifier disagnostics application using JavaScript</li>
                            <li>Collaborated with co-workers using Git</li>
                        </ul>
                    </div>
                    <img className="experience-deco" src={Splash} />
                </div>
                    
                <div id="arrowAnim">
                <div className="arrowSliding">
                    <div className="arrow"></div>
                </div>
                <div className="arrowSliding delay1">
                    <div className="arrow"></div>
                </div>
                <div className="arrowSliding delay2">
                    <div className="arrow"></div>
                </div>
                <div className="arrowSliding delay3">
                    <div className="arrow"></div>
                </div>
                </div>

                <div className="experience-section">
                    <img className="experience-deco" src={Splash} />
                    <div className="text-container">
                    <p className="text-title">Junior Programmer</p>
                    <p className="text-subtitle">Advantech Wireless</p>
                    <p className="text-surtitle">November 2025 - Present</p>
                    <ul className="text-ul">
                        <li>Develops and maintains a database web application used to view product information and testing</li>
                        <li>Creating a serial communications API for Amplifiers</li>
                        <li>Scripts in C# and JavaScript</li>
                        <li>Uses MySQL for data anylasis</li>
                        <li>Collaborates with team members utlizing Git through BitBucket</li>
                    </ul>
                    </div>
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