import mail from "../email.png"
import linkedin from "../linkedin.png"

export default function Body(){

    return(
        <div className="body-container">
            <h1>Larry Smith</h1>
            <h4>Frontend Developer</h4>
            <h6>larrysmith.website</h6>
            <div className="buttons">
                <button className="btn1">
                    <img src={mail} alt="" className="btn1p"/>
                    Email</button>
                <button className="btn2" >
                    <img src={linkedin} alt="" className="btn2p" />
                linkedin</button>
                </div>
                <div className="details">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up  with security and best practices</p>
                <h2>Interests</h2>
                <p>Frontend Development, Automation, Security,Travel geek, Entrepreneur</p>
                </div>
                
            
        </div>
    )
}