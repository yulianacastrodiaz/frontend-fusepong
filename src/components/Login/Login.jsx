import React, { useState, useEffect } from "react";
import s from "./Login.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/index";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
    setUser({
      email: "",
      password: "",
    });
  };
  const handleChange = (e) => {
    console.log(e.target.name);
    setUser({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={s.body}>
      <div className={s.container} id={s.container}>
        <div className={s["form-container"]} id={s["sign-in-container"]}>
          <form onSubmit={handleSubmit} className={s.form}>
            <h1 className={s.h1}>Log in</h1>
            <input
              type="email"
              placeholder="Email"
              name="username"
              className={s.input}
              value={user.username}
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className={s.input}
              value={user.password}
              onChange={(e) => handleChange(e)}
              required
            />
            <button type="submit" className={s.button}>
              Log In
            </button>
          </form>
        </div>
        <div className={s["overlay-container"]}>
          <div className={s.overlay}>
            <div className={s["overlay-panel"]}>
              <h1 className={s.h1}>Bienvenido!</h1>
              <p className={s.p}>
                Para mantenerte conectado con nosotros, por favor, ingresa con
                tu cuenta personal
              </p>
              <p className={s.p}>No tienes una cuenta?</p>
              <NavLink to="/signup" className={s.button} id={s.ghost}>
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
