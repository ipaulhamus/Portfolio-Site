import '../css/navBar.css';
import logoImage from '../assets/color-splat-1.png';

export default function NavBar() {
    return (
        <>
            <div className="navbar-container navbar-desktop">
                <div className="navbar-logo-container">
                    <img className="navbar-logo-img" src={logoImage} alt="Ian.dev logo"></img>
                    <h1 className="navbar-logo-text">ian.dev</h1>
                </div>

                <div className="nav-item-container">
                    <a className="nav-item">About</a>
                    <a className="nav-item">Skills</a>
                    <a className="nav-item">Projects</a>
                    <a className="nav-item">Experience</a>
                    <a className="nav-item">Contact</a>
                </div>
            </div>

            <div className="navbar-container navbar-mobile">
                <div className="navbar-logo-container">
                    <img className="navbar-logo-img" src={logoImage} alt="Ian.dev logo"></img>
                    <h1 className="navbar-logo-text">ian.dev</h1>
                </div>

                <div className="expand-btn-div">
                    <button className="expand-btn">☰</button>
                </div>
            </div>
        </>
    )
}

