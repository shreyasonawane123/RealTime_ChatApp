import React from "react";

export default function Register() {
  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Enter your name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
