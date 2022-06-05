// import { Link } from "react-router-dom";
import img from "../../images/image.jpg";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={img}
          alt=""
        />
        <p>
        I am a student with a strong personality, hard-working, honest, and a good learner as well. I can easily work under pressure and meet deadlines when given the opportunity. As a fresher, I am looking for a job in an organization where I get a platform to put my skills to the best use. My goal is to find a suitable position in which I can grow and succeed as an individual and in the process benefit both the organization and me.
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          {/* <i className="sidebarIcon fab fa-facebook-square"></i> */}
          <a href="https://www.instagram.com/thenayakshivam/" target="_blank"><i className="sidebarIcon fab fa-instagram-square"></i></a>
          <a href="https://twitter.com/theshivamnayak" target="_blank"><i className="sidebarIcon fab fa-twitter-square"></i></a>
        </div>
      </div>
    </div>
  );
}