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
    <nav className="NavBar bg-gray-800">
            <Logo />
            <div className = "NavBarContainer">
            <hr></hr>
            <Link to="/">New Rando Resto</Link>
            &nbsp; | &nbsp;
            <Link to="/userRestaurantList">My Rest List</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>
              Log Out
            </Link>
            </div>
            <hr></hr>
    </nav>
  );
}
