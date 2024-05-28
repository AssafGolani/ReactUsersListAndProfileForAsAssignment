/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./UserView.module.css";

export default function UserView({ viewType }) {
  const users = useSelector((state) => state.users);

  return (
    <div className={viewType === "list" ? classes.listView : classes.cardView}>
      {users.map((user) => (
        <div
          key={user.id}
          className={viewType === "list" ? classes.listItem : classes.cardItem}
        >
          <img src={user.photo} alt={user.name} className={classes.userPhoto} />
          <div className={classes.userInfo}>
            <Link to={`/users/${user.id}`} className={classes.userName}>
              {user.name}
            </Link>
            <div className={classes.userNickname}>{user.nickname}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
