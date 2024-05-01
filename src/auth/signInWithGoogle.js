'use client';
import { useEffect, useState } from "react";
import { auth, provider } from "../app/firebaseConfig";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function GoogleSignIn() {
  //* State Management
  const [userObj, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //* Side Effects
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  //* Google Auth
  async function handleGoogleClick() {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log(result.user);
    } catch (error) {
      console.error("An error has occurred during sign in:", error);
    }
  }

  async function handleLogOutClick() {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("An error has occurred during sign out:", error);
    }
  }

  //* Email and Password Handlers
  async function handleSignUpWithEmail(e) {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Created:", userCredential.user);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSignUpWithEmail}>
        <label>
          Email:
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
        </label>

        <label>
          Password:
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </label>
        <button className="rounded border p-2">Sign up!</button>
      </form>

      {userObj ? (
        <div>
          <p>Welcome, {userObj.displayName}!</p>
          <button className="rounded border p-2" onClick={handleLogOutClick}>
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={handleGoogleClick}
          style={{ border: "1px solid black" }}
          className="p-5 m-5"
        >
          Google Sign In
        </button>
      )}
    </>
  );
}
