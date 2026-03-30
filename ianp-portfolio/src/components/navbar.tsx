import '../css/navBar.css';

export default function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-logo-container">
                    <img className="navbar-logo-img" src=""></img>
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
        </>
    )
}

