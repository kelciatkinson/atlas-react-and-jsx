import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";


export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/kelciatkinson" target="_blank">
        <img src={linkedin} alt="linkedin"></img>
      </a>
      <a href="https://www.github.com/kelciatkinson/atlas-react-and-jsx" target="_blank">
        <img src={github} alt="github"></img>
      </a>
    </div>
  )
}
