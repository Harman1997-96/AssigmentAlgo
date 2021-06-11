import "./header.css";
import image1 from "../../image/nature.webp"
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">I live to explore Nature</span>
      <span className="headerTitleLg">ASSIGMENT React</span>

      </div>

      <img
        className="headerImg"
        src={image1}
       alt=""
      />
    </div>
  );
}
