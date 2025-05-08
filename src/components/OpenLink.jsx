import open from "../assets/open.svg";


export default function OpenLink(props) {
  return <a href={props.link} target="_blank"><img src={open} al="open-link"></img></a>
}
