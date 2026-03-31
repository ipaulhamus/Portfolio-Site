import heroImage from '../assets/Hero-Banner-Prototype.png';
import '../App.css';

export default function Hero() {
    return (
        <>
            <img className="hero-img" src={heroImage}></img>
            <h1 className="hero-txt">Ian Paulhamus</h1>
            <h3 className="hero-subtitle">Software Developer</h3>
        </>
    )
}