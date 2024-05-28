import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import UserView from "../components/UserView";
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
      {!userId ? <UserView viewType={view} /> : <Outlet />}
    </div>
  );
}
