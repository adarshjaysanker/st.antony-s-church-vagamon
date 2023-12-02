import './Header.css'


function Header(){
    return(
        <header>
            <div className="logo">
                <img src="https://www.pngall.com/wp-content/uploads/9/Catholic-Cross-PNG.png" width="35px" alt="Logo"></img>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header