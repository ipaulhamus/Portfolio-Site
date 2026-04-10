import './textBox';
import TextBox from './textBox';
import splatImage from '../assets/color-splat-1.png'


export default function ExperienceSection() {
    return (
        <>
            <div className="experience-container">
                <div className="experience-left">
                    <TextBox title="Programming Intern" 
                        subtitle="Advantech Wireless / June 2025 - November 2025"
                        text="iueqhfiuawelkhfuiewalhfiuwhewauiolfheawilfewhiuewfh
                             jfoweijfoiaw;ejfoiwjfweoijfweaoifjewoiefwjoiefwjoiwe
                             euifhweiufheuwifhiuwefhuiwehfiwehfiuwhfuiwhfiuewhfiu
                             fuiewhbfiuwehfiuwehfuiwehfiuwhfuiwehfiuewhfiuwehfiuu"    
                    />
                    <img src={splatImage} className="experience-image" />
                </div>

                <div className="experience-center">
                    <div className="experience-arrow" />
                </div>

                <div className="experience-right">
                    <img src={splatImage} className="experience-image" />
                    <TextBox title="Junior Programmer" 
                        subtitle="Advantech Wireless / November 2025 - Present"
                        text="iueqhfiuawelkhfuiewalhfiuwhewauiolfheawilfewhiuewfh
                             jfoweijfoiaw;ejfoiwjfweoijfweaoifjewoiefwjoiefwjoiwe
                             euifhweiufheuwifhiuwefhuiwehfiwehfiuwhfuiwhfiuewhfiu
                             fuiewhbfiuwehfiuwehfuiwehfiuwhfuiwehfiuewhfiuwehfiuu"    
                    />
                </div>
            </div>
        </>
    )
}