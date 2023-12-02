import './footer.css'

function Footer(){
    return(
        <footer className="site-footer">
            <div className="footer-column">
                <h3>Contact</h3>
                <p>Email : info@example.com</p>
                <p>Phone : +1 (123) 456-7890</p>
            </div>
            <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="home">About Us</a></li>
                    <li><a href="home">Services</a></li>
                    <li><a href="home">Contact</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Follow Us</h3>
                <p>Stay Connected on Social Media</p>
                <ul>
                    <li><a href="home">Facebook</a></li>
                    <li><a href="home">Twitter</a></li>
                    <li><a href="home">Instagram</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer