import { useState } from 'react';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from '../../components/Logo/Logo';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className=" ">
      <div>
      <div className="AuthPageLogo">
      <Logo /> 
      </div>
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? <button>Don't have an account? SignUp</button> : <button>Have an account? Sign In</button>}
        </h3>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
