import './servicebox.css'

function ServiceBox(props){
    return(
        
            <div className="service-box">
                <h2>{props.servicedata.title}</h2>
                <p>{props.servicedata.description}</p>
                <a href='#button' className='service-button'>{props.servicedata.buttontext}</a>
            </div>
    )
}

export default ServiceBox