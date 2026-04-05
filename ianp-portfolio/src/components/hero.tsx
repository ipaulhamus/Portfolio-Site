import heroImage from '../assets/Hero-Banner-Prototype.png';
import '../App.css';
import '../css/hero.css';

export default function Hero() {
    return (
        <section className="hero-banner">
            <img className="hero-img" src={heroImage} alt="Banner" />

            <div className="hero-copy">
                <h1 className="hero-txt">Ian Paulhamus</h1>
                <h2 className="hero-subtitle">Software Developer</h2>
            </div>
        </section>
    )
}