import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import UserCardView from "../components/UserCardView";
import UserListView from "../components/UserListView";

export default function UserPage() {
  const [view, setView] = useState("list"); // State to manage view selection
  const { userId } = useParams(); // Get userId from URL parameters
  return (
    <div>
      <h2>User Profiles</h2>
      {!userId && (
        <div>
          <button onClick={() => setView("list")}>List View</button>
          <button onClick={() => setView("card")}>Card View</button>
        </div>
      )}
      {!userId ? (
        view === "list" ? (
          <UserListView />
        ) : (
          <UserCardView />
        )
      ) : (
        <Outlet />
      )}
    </div>
  );
}
