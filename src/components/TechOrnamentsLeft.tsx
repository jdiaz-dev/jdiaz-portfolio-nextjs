import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TechOrnamentsLeft() {
  return (
    <div className="ornament ornament-left">
      <ul className="tech-icons">
        <li>
          <i className="fab fa-aws"></i>
        </li>
        <li>
          <i className="fab fa-node-js"></i>
        </li>
        <li>
          <i className="fab fa-js"></i>
        </li>
        <li>
          <i className="fab fa-cloudflare"></i>
        </li>
      </ul>
      <div className="vertical-ornament"></div>
    </div>
  );
}
