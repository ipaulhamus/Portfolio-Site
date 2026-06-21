import TextBox from "./textBox";
import { NavigateTo, ScrollToPosition, DownloadFile } from "../js/commonFunctions";
import '../css/sectionContainers.css'
import '../css/buttons.css'
import ResumeFile from '../assets/ian-paulhamus-resume.pdf';

export default function AboutSection() {
    return (
    <>
        <div className="about-container">
            <div className="about-container-item">
                    <TextBox title="Hi, I'm Ian Paulhamus!" subtitle="" text="I am a dedicated Software Development and Programming graduate from South Hills School of Business & Technology who is passionate about computers and the tech industry. I have hands-on experience in both front-end and back-end development, with experience across many languages like C#, C++, JavaScript, Python, and frameworks such as ASP.NET, React, and Angular.
I thrive in environments where I can learn and adapt quickly, with a great ability to learn new skills and tools. I currently work as a Junior Developer at Advantech Wireless Technologies, creating and maintaing a company database webpage alongside other projects such as a serial communications API in C#." />
            </div>
        <div className="about-container-item">
            <div className="btns-div">
                <button className="btn btn-lg btn-hover-effect" onClick={() => ScrollToPosition(1600)}>See Experience</button>
                <br />
                <button className="btn btn-sm btn-hover-effect" onClick={() => DownloadFile(ResumeFile)}>Resume Download</button>
                <br />
                <button className="btn btn-sm btn-hover-effect" onClick={() => NavigateTo("https://github.com/ipaulhamus")}>View My GitHub</button>
            </div>
        </div>
        </div>
    </>
    )
}