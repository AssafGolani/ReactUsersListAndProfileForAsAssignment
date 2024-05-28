import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./UserListView.module.css";
export default function UserListView() {
  const users = useSelector((state) => state.users);
  return (
    <div className={classes.userList}>
      {users.map((user) => (
        <div key={user.id} className={classes.userItem}>
          <img src={user.photo} alt={user.name} className={classes.userPhoto} />
          <div className={classes.userInfo}>
            <Link to={`/users/${user.id}`} className={classes.userName}>
              {user.name}
            </Link>
            <div className={classes.userNickName}>{user.nickname}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
