import TextBox from "./textBox";
import '../css/sectionContainers.css'
import '../css/buttons.css'

export default function AboutSection() {
    return (
    <>
        <div className="about-container">
            <div className="about-container-item">
                    <TextBox title="Hi, I'm Ian Paulhamus!" subtitle="" text="iuehwfuiehwfiuewhfeiuhfewiufhweiufhwejfioewjfoweijfewoijfewoifjweoifjweoifjewoifejwiofj
                    iuehwfuiehwfiuewhfeiuhfewiufhweiufhwejfioewjfoweijfewoijfewoifjweoifjweoifjewoifejwiofj 
                    iuehwfuiehwfiuewhfeiuhfewiufhweiufhwejfioewjfoweijfewoijfewoifjweoifjweoifjewoifejwiofj 
                    iuehwfuiehwfiuewhfeiuhfewiufhweiufhwejfioewjfoweijfewoijfewoifjweoifjweoifjewoifejwiofj 
                    iuehwfuiehwfiuewhfeiuhfewiufhweiufhwejfioewjfoweijfewoijfewoifjweoifjweoifjewoifejwiofj" />
            </div>
        <div className="about-container-item">
            <div className="btns-div">
                <button className="btn btn-lg">See Experience</button>
                <br />
                <button className="btn btn-sm">Resume Download</button>
                <br />
                <button className="btn btn-sm">View GitHub</button>
            </div>
        </div>
        </div>
    </>
    )
}