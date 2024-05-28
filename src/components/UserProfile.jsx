import { useSelector, useDispatch } from "react-redux";
import { useParams, json, useNavigate } from "react-router-dom";
import { deleteUser } from "../store/usersSlice";
import classes from "./UserProfile.module.css";

export default function UserProfile() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) =>
    state.users.find((user) => user.id === parseInt(userId))
  );
  if (!user) {
    throw json({ error: "User not found" }, { status: 500 });
  }

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
    navigate("/users"); // Navigate back to the users list after deletion
  };

  return (
    <div className={classes.profile}>
      <img src={user.photo} alt={user.name} className={classes.profilePhoto} />
      <h2>{user.name}</h2>
      <p>Nickname: {user.nickname}</p>
      <p>Profession: {user.profession}</p>
      <button onClick={handleDelete} className={classes.deleteButton}>
        Delete User
      </button>
    </div>
  );
}
