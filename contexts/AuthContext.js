import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const isAuthenticated = false;

  //   const [user, setUser] = useState()

  //   useEffect(() => {
  //     const { projintegtoken: token } = parseCookies();

  //     if (token) {
  //       console.log(token);
  //     }
  //   }, []);

  async function login({ username, password }) {
    await fetch("https://projetointegrado-ianbs.herokuapp.com/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCookie(undefined, "projintegtoken", data.token, {
          maxAge: 60 * 60 * 60,
        });
        api.defaults.headers["Authorization"] = `Bearer ${data.token}`;
      })
      .catch((err) => console.error(err));

    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
}
