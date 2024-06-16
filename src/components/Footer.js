import fb from "../fb.png"
import twitter from "../twitter.png"
import insta from "../insta.png"
import github from "../github.png"

export default function Footer(){

    return(
        <div className="footer-container">
            <img src={twitter} alt="" /><img src={fb} alt="" /><img src={insta} alt="" /><img src={github} alt="" />
        </div>
    )
}