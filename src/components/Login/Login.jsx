import React from "react";
import s from "./Login.module.css";

export default function Login() {
  return (
    <div className={s.body}>
      <div className={s.container} id={s.container}>
        <div className={s["form-container"]} id={s["sign-in-container"]}>
          <form action="#" className={s.form}>
            <h1 className={s.h1}>Log in</h1>
            <input type="email" placeholder="Email" className={s.input} />
            <input type="password" placeholder="Password" className={s.input} />
            <button className={s.button}>Sign In</button>
          </form>
        </div>
        <div className={s["overlay-container"]}>
          <div className={s.overlay}>
            <div className={s["overlay-panel"]}>
              <h1 className={s.h1}>Welcome Back!</h1>
              <p className={s.p}>
                To keep connected with us please login with your personal info
              </p>
              <button className={s.button} id={s.ghost}>
                back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
