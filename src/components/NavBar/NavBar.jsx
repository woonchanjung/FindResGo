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
      {/* <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}
            <Logo />
            <Link to="/">New Random Restaurant</Link>
            &nbsp; | &nbsp;
            <Link to="/userRestaurantList">My Restaurant List</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>
              Log Out
            </Link>
            <h2>Welcome, {user.name}</h2>
          {/* </div>
        </div>
      </div> */}
    </nav>
  );
}
