import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import AuthButton from "./AuthButton";

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response: AxiosResponse<any> = await axios.post(
        "/api/auth/signup",
        {
          name,
          contact,
          email,
          password,
        }
      );
      if (response.status === 200) {
        window.alert("Logged In");
      } else {
        window.location.assign("/");
      }
    } catch (err) {
      console.error("Login Error");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input
        id="auth-form-input"
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Contact No."
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
      <AuthButton />
    </form>
  );
};

export default SignupForm;
