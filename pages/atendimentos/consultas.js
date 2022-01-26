import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
// import nookies, { parseCookies } from "nookies";

import HeadPage from "../Components/Head";
import SidebarComponent from "../Components/Sidebar";
import HeaderComponent from "../Components/Header";

export default function Consultas() {
  const router = useRouter();

  return (
    <div className="">
      <HeadPage pageTitle={"[Consultas]"} />
      <SidebarComponent
        ativo={"atendimento"}
        subitem={"consulta"}
      ></SidebarComponent>
      <Main>
        <HeaderComponent title={"Atendimentos - Consultas"}></HeaderComponent>
        <MainContent>
          <div>
            <div className="top-container">
              <button>
                <i className="las la-search"></i> Procurar
              </button>
            </div>
            <div className="container">
              <h1>Nova Consulta</h1>
              <form className="form-consulta">
                <div style={{ gridColumn: "1" }}>
                  <label className="form-label" htmlFor="codigopaciente">
                    Código do Paciente
                  </label>
                  <input
                    id="codigopaciente"
                    type="text"
                    name="codigopaciente"
                  />
                </div>
                <div style={{ gridColumn: "2/8" }}>
                  <label className="form-label" htmlFor="nomepaciente">
                    Nome do Paciente
                  </label>
                  <input id="nomepaciente" type="text" name="nomepaciente" />
                </div>
                <div style={{ gridColumn: "1" }}>
                  <label className="form-label" htmlFor="codigoconvenio">
                    Código Convênio
                  </label>
                  <input
                    id="codigoconvenio"
                    type="text"
                    name="codigoconvenio"
                  />
                </div>
                <div style={{ gridColumn: "2/8" }}>
                  <label className="form-label" htmlFor="nomeconvenio">
                    Nome Convênio
                  </label>
                  <input id="nomeconvenio" type="text" name="nomeconvenio" />
                </div>
                <div style={{ gridColumn: "1/3" }}>
                  <label className="form-label" htmlFor="tipoconsulta">
                    Tipo de Consulta
                  </label>
                  <input id="tipoconsulta" type="text" name="tipoconsulta" />
                </div>
                <div style={{ gridColumn: "3/5" }}>
                  <label className="form-label" htmlFor="caracteratendimento">
                    Caracter Atedimento
                  </label>
                  <input
                    id="caracteratendimento"
                    type="text"
                    name="caracteratendimento"
                  />
                </div>
                <div style={{ gridColumn: "5/8" }}>
                  <label className="form-label" htmlFor="indicacaoacidente">
                    Indicação de Acidente
                  </label>
                  <input
                    id="indicacaoacidente"
                    type="text"
                    name="indicacaoacidente"
                  />
                </div>

                <div style={{ gridColumn: "1/3" }}>
                  <label
                    style={{ fontSize: "1rem" }}
                    className="form-label"
                    htmlFor="atedimentorecemnascido"
                  >
                    <input
                      className="checkbok"
                      id="atedimentorecemnascido"
                      type="checkbox"
                      name="atedimentorecemnascido"
                    />
                    Atendimento Recém Nascido{" "}
                  </label>
                </div>
                <div style={{ gridColumn: "3/5" }}>
                  <label className="form-label" htmlFor="dataatendimento">
                    Data da Consulta
                  </label>
                  <input
                    id="dataatendimento"
                    type="date"
                    name="dataatendimento"
                  />
                </div>
                <div style={{ gridColumn: "5/8" }}>
                  <label className="form-label" htmlFor="datarealizacao">
                    Data de Realização
                  </label>
                  <input
                    id="datarealizacao"
                    type="date"
                    name="datarealizacao"
                  />
                </div>
                <div style={{ gridColumn: "1/8" }}>
                  <label className="form-label" htmlFor="datarealizacao">
                    Procedimentos
                  </label>
                  <input id="procedimento" type="text" name="procedimento" />
                </div>
              </form>
            </div>
          </div>
        </MainContent>
      </Main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  //   const cookies = nookies.get(ctx);
  const cookies = parseCookies(ctx);
  const token = JSON.parse(cookies.user_token);
  const { isAuth } = token;
  console.log();
  if (!isAuth) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      cookies: cookies,
    },
  };
}

const Main = styled.main`
  margin-left: 250px;
`;

const MainContent = styled.main`
  margin-top: 80px;
  padding: 2rem 1.5rem;
  background: var(--white);
  min-height: calc(100vh - 90px);

  /* input,
  label {
    display: block;
  } */

  .top-container {
    button {
      border: 2px solid black;
      background-color: white;
      color: black;
      padding: 14px 28px;
      font-size: 16px;
      cursor: pointer;
      border-color: #e7e7e7;
      color: black;
      &:hover {
        background: #e7e7e7;
      }
    }
  }

  .container {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    justify-content: center;
    align-items: center;
    justify-self: center;
    width: 100%;
    .form-consulta {
      display: grid;
      justify-self: center;
      grid-template-columns: repeat(7, 1fr);
      grid-gap: 10px;
      padding: 1rem;
      div {
        width: 100%;
        margin: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-right: 0.5rem;
        .form-label {
          width: 100%;
          font-size: 0.8em;
        }
        input {
          width: 100%;
          padding: 0.5em;
          font-size: 1em;
        }
        input[type="checkbox"] {
          width: 2rem;
          height: 1.2rem;
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }
`;
