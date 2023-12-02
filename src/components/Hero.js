import './Hero.css'


function Hero(){
    return(
        <section className="hero">
            <div className="hero-content">
                <h1>ST.ANTONY'S CHURCH</h1>
                <p>VAGAMON</p>
                <a href="#cta" className="cta-button">Learn More</a>
            </div>
            <div className="quote">
                <p>"But those who hope in the Lord
                    will renew their strength.
                    They will soar on wings like eagles;
                    they will run and not grow weary,
                    they will walk and not be faint."
                </p>
                <p class="author">Isaiah 40:31</p>
            </div>
        </section>
    )
}

export default Hero