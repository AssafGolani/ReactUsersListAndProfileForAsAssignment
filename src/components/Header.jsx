import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/photos/logo.png";
import classes from "./Header.module.css";
export default function Header() {
  const location = useLocation();
  const { userId } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === parseInt(userId));

  const showUserInfo = location.pathname.includes("/users/") && user;
  return (
    <header className={classes.header}>
      <div className={classes.logoSection}>
        <img src={logo} className={classes.logo} alt="Logo" />
        {showUserInfo && (
          <div className={classes.userInfo}>
            <span>{user.name}</span>
            <span>{user.profession}</span>
          </div>
        )}
      </div>
      <div className={classes.actions}>
        <button>Change Language</button>
        <input type="text" placeholder="Send feedback" />
      </div>
    </header>
  );
}
