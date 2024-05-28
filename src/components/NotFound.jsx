import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";
export default function NotFound() {
  return (
    <div className={classes.notFound}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
