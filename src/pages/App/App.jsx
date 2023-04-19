import { useState } from "react";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import Home from "../Home/Home";
import Restaurant from "../../components/Restaurant/Restaurant";
import UserRestaurantList from "../UserRestaurantList/UserRestaurantList";

export default function App() {
  const [user, setUser] = useState(getUser());

  function updateUser(userState) {
    setUser(userState);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} updateUser={updateUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/orders/new" element={<UserRestaurantList />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={updateUser} />
      )}
    </main>
  );
}
