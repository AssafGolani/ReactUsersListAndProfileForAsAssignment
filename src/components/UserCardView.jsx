import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./UserCardView.module.css";
export default function UserCardView() {
  const users = useSelector((state) => state.users);

  return (
    <div className={classes.cardContainer}>
      {users.map((user) => (
        <div key={user.id} className={classes.card}>
          <img src={user.photo} alt={user.name} className={classes.cardPhoto} />
          <div className={classes.cardInfo}>
            <Link to={`/users/${user.id}`} className={classes.cardName}>
              {user.name}
            </Link>
            <div className={classes.cardNickname}>{user.nickname}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
