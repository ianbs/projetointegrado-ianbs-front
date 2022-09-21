import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const isAuthenticated = false;
  const collapsed = true;
  const [erro, setErro] = useState(false);

  async function login({ username, password }) {
    await fetch("https://sgcc-ianbs.herokuapp.com/auth/login", {
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
        // console.log(data);
        if (data.access_token) {
          setCookie(undefined, "projintegtoken", data.access_token, {
            maxAge: 60 * 60 * 60,
            sameSite: "none",
          });
        } else {
          setErro(true);
        }

        // setCookie(undefined, "username", data.usuario.nome, {
        //   maxAge: 60 * 60 * 60,
        // });
        // setCookie(undefined, "userid", data.usuario.id, {
        //   maxAge: 60 * 60 * 60,
        // });
        api.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        api.defaults.headers["Access-Control-Allow-Origin"] = '*';
        api.defaults.headers["Content-Type"] = 'application/json';
        // setUser(data.usuario);
        // console.log(data.user);
        Router.push("/");
      })
      .catch((err) => {
        setErro(true);
        return erro;
        // setCookie(undefined, "erro", erro, {
        //   maxAge: 20,
        // });
      });
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, collapsed, erro, setErro }}
    >
      {children}
    </AuthContext.Provider>
  );
}
