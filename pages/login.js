import { useContext, useState } from "react";
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
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data) => {
    setLoading(true);
    await login(data);
    setLoading(false);
  };

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
                <div>
                  <p className="invalid-feedback">{errors.username?.message}</p>
                  <input
                    {...register("username")}
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
  height: 100vh;
  .card-login {
    display: inline-flex;
    background-color: var(--main-color);
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    justify-content: center;
    align-items: center;
    .line {
      height: 10rem;
      background: var(--text-grey);
      width: 1px;
    }
    .left-card {
      padding: 1rem;
      text-align: center;
      h1 {
        font-size: 3.5rem;
        margin-right: 15px;
      }
    }
    .right-card {
      padding: 1rem;
      h1 {
        font-size: 1rem;
        text-align: center;
      }
      input {
        font-size: 1rem;
        width: 100%;
        margin: 10px;
        height: 2rem;
        margin-left: 0;
        border-radius: 10px;
        border: 0;
        text-align: center;
      }
      button {
        width: 100%;
        margin-top: 10px;
        font-size: 1rem;
        height: 2rem;
        border-radius: 10px;
        background-color: var(--text-grey);
        color: var(--color-dark);
        border: 0;
      }
    }
  }
`;
