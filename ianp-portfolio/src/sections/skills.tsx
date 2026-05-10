import TitleBlock from "../components/titleBlock";
import SkillsBlock from "../components/skillsBlock";

//== Image Imports ==//
//Web Languages
import JSLogo from "../assets/JavaScript-Logo.png";
import TSLogo from "../assets/Typescript-Logo-2020.png";
import HTMLLogo from "../assets/HTML_Logo.png";
import CSSLogo from "../assets/Official-CSS-Logo.png";

//Other Languages
import CSharpLogo from "../assets/Csharp_Logo.png";
import KotlinLogo from "../assets/Kotlin-Icon.png";
import SwiftIcon from "../assets/Swift-Icon.png";
import PythonLogo from "../assets/Python-Logo.png";

//Frameworks
import BlazorLogo from "../assets/blazor-logo.png";
import VueLogo from "../assets/Vue-Logo.png";
import ReactLogo from "../assets/React-Icon.png";
import NodeLogo from "../assets/nodejs-image.webp";

//Tools
import DockerLogo from "../assets/docker-mark-logo.png";
import TuxIcon from "../assets/Tux-Icon.png";
import GitLogo from "../assets/Git-Icon.png";
import SQLLogo from "../assets/sql-database.webp";

export default function SkillsSection() {

    const WebTitles = ["JavaScript", "TypeScript", "HTML", "CSS"];
    const WebImages = [JSLogo, TSLogo, HTMLLogo, CSSLogo];

    const LanguageTitles = ["C#", "Kotlin", "Swift", "Python"];
    const LanguageImages = [CSharpLogo, KotlinLogo, SwiftIcon, PythonLogo];

    const FrameworkTitles = ["React", "Vue", "Node.js", "Blazor"];
    const FrameworkImages = [ReactLogo, VueLogo, NodeLogo, BlazorLogo];

    const ToolTitles = ["Git", "SQL", "Docker", "Linux"];
    const ToolImages = [GitLogo, SQLLogo, DockerLogo, TuxIcon];

    return (
    <>
        <div className="grey-background">
            <TitleBlock title="Skills" />
            <div className="skills-float">
                <SkillsBlock titles={WebTitles} images={WebImages} isRed={false} />
                <SkillsBlock titles={FrameworkTitles} images={FrameworkImages} isRed={false} />
            </div>
            <div className="skills-float">
                <SkillsBlock titles={LanguageTitles} images={LanguageImages} isRed={true} />
                <SkillsBlock titles={ToolTitles} images={ToolImages} isRed={true} />
            </div>
        </div>
    </>
    )
}