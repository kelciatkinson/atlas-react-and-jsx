import copy from "../assets/copy.svg";


export default function CopyLink(props) {
  const clickCopy = () => {
    navigator.clipboard.writeText(props.link)
  };

  return <img className="copy" src={copy} onClick={clickCopy}></img>
}
