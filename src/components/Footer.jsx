import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ul className={classes.footerList}>
        <li className={classes.footerItem}>
          <Link to="/" className={classes.footerLink}>
            Users List
          </Link>
        </li>
        <li className={classes.footerItem}>
          <Link to="/cookies" className={classes.footerLink}>
            Cookies
          </Link>
        </li>
        <li className={classes.footerItem}>
          <Link to="/notifications" className={classes.footerLink}>
            Notifications
          </Link>
        </li>
        <li className={classes.footerItem}>
          <Link to="/policies" className={classes.footerLink}>
            General Policies
          </Link>
        </li>
        <li className={classes.footerItem}>
          <Link to="/3d" className={classes.footerLink}>
            3D page
          </Link>
        </li>
      </ul>
    </footer>
  );
}
