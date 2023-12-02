import { useState } from 'react'
import './BibleSec.css'
import BibleQuotes from './files/biblequotes';

function getRandomQuote(){
    const randomIndex = Math.floor(Math.random() * BibleQuotes.length);
    return BibleQuotes[randomIndex]
}

function BibleSec(){
   
    let [quote, setQuote] = useState('');
    let [author, setAuthor] = useState('');
    function showNextQuote(){
        const randomQuote = getRandomQuote();
        setQuote(quote = randomQuote.quote);
        setAuthor(author = randomQuote.author)
    }
    return(
        <section className="quote-section">
            <div className="quote-background"></div>              
                    <div className="quote-content">
                        <p className="quote-text">
                           {quote}
                        </p>
                        <p className="quote-author">{author}</p>
                        <button onClick={showNextQuote} className='quote-control'>NEXT</button>
                    </div>
        </section>
    )
}

export default BibleSec