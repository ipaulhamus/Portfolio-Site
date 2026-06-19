import '../css/navBar.css';
import logoImage from '../assets/color-splat-1.png';
import { ScrollToPosition, NavigateTo } from '../js/commonFunctions';

export default function NavBar() {
    return (
        <>
            <div className="navbar-container navbar-desktop">
                <div className="navbar-logo-container">
                    <img className="navbar-logo-img" src={logoImage} alt="Ian.dev logo"></img>
                    <h1 className="navbar-logo-text">ian.dev</h1>
                </div>

                <div className="nav-item-container">
                    <a className="nav-item" onClick={() => ScrollToPosition(120)}>About</a>
                    <a className="nav-item" onClick={() => ScrollToPosition(750)}>Skills</a>
                    <a className="nav-item" onClick={() => ScrollToPosition(1600)}>Experience</a>
                    <a className="nav-item" onClick={() => ScrollToPosition(2650)}>Projects</a>
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

