import OpenLink from "./OpenLink.jsx";
import CopyLink from "./CopyLink.jsx";

function HelpfulResource(props) {
  return <div className="helpful-resource">
      {props.label}
      <OpenLink link={props.link} />
      <CopyLink link={props.link} />
    </div>
}

export default HelpfulResource;
