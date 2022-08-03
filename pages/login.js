import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import HeadPage from "../src/Components/Head";
import { AuthContext } from "../contexts/AuthContext";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { login, erro, setErro } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data) => {
    setLoading(true);
    await login(data);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => setErro(false), 10000);
  });

  return (
    <div className="">
      <HeadPage pageTitle={"[Login]"} />

      <Container>
        <div className="card-login">
          <div className="left-card">
            <h1>
              <span className="las la-stethoscope"></span> SGCC
            </h1>
          </div>
          <div className="line"></div>
          <div className="right-card">
            <div className="form-login">
              <h1>Login</h1>
              <form onSubmit={handleSubmit(handleLogin)}>
                <div
                  className={
                    erro
                      ? "alert small p-0 text-center alert-danger visible"
                      : "alert small p-0 text-center alert-danger invisible"
                  }
                  role="alert"
                >
                  <small>Usuário e/ou Senha inválidos</small>
                </div>
                <div>
                  <input
                    {...register("username")}
                    className="form-control form-control-sm mb-2"
                    type="text"
                    name="username"
                    autoFocus
                    placeholder="Usuário"
                  />
                </div>
                <div>
                  <p className="invalid-feedback">{errors.password?.message}</p>
                  <input
                    {...register("password")}
                    className="form-control form-control-sm "
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Senha"
                  />
                </div>
                <div>
                  {loading ? (
                    <button className="btn btn-primary" type="button" disabled>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </button>
                  ) : (
                    <button className="btn btn-primary" type="submit">
                      Login
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-dark);
  width: 100vw;
  height: 80vh;
  .card-login {
    display: inline-flex;
    background-color: var(--main-color);
    /* padding: 1rem; */
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    justify-content: center;
    align-items: center;
    .line {
      height: 10rem;
      background: rgba(0, 0, 0, 0.3);
      width: 1px;
    }
    .left-card {
      padding: 2rem;
      text-align: center;
      h1 {
        font-size: 4rem;
        margin-right: 15px;
      }
    }
    .right-card {
      padding: 1rem;
      h1 {
        font-size: 1rem;
        text-align: center;
      }
      /* input {
        font-size: 1rem;
        width: 100%;
        /* margin: 10px; */
      /*height: 2rem;
        margin-left: 0;
        /* border-radius: 10px; */
      /*border: 0;
        border-bottom: 1px solid #333;
        text-align: center;
      } */
      button {
        width: 100%;
        background-color: var(--main-color);
        margin-top: 10px;
        font-size: 1rem;
        /* height: 2rem; */
        /* padding: 1rem; */
        border-radius: 5px;
        background-color: #04d9c4;
        color: var(--color-dark);
        border: 0;
      }
    }
  }
`;
