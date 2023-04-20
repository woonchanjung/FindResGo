import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Logo from "../Logo/Logo";

export default function NavBar({ user, updateUser }) {
  function handleLogOut() {
    userService.logOut();
    updateUser(null);
  }

  return (
    <nav>
      <Logo />
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/userRestaurantList">My Restaurant List</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
      <h2>Welcome, {user.name}</h2>
    </nav>
  );
}
