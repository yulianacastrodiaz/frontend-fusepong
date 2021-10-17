import React from "react";
import s from "./Login.module.css";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className={s.body}>
      <div className={s.container} id={s.container}>
        <div className={s["form-container"]} id={s["sign-in-container"]}>
          <form action="#" className={s.form}>
            <h1 className={s.h1}>Log in</h1>
            <input type="email" placeholder="Email" className={s.input} />
            <input type="password" placeholder="Password" className={s.input} />
            <button className={s.button}>Log In</button>
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
