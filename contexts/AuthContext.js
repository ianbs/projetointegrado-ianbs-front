import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const isAuthenticated = false;
  const collapsed = true;

  async function login({ username, password }) {
    await fetch("https://projetointegrado-ianbs.herokuapp.com/api/login", {
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
        setCookie(undefined, "username", data.usuario.nome, {
          maxAge: 60 * 60 * 60,
        });
        setCookie(undefined, "userid", data.usuario.id, {
          maxAge: 60 * 60 * 60,
        });
        api.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        setUser(data.usuario);
        // console.log(data.user);
      })
      .catch((err) => console.error(err));

    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, collapsed }}>
      {children}
    </AuthContext.Provider>
  );
}
